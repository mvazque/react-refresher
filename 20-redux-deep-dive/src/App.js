import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {

      if(isInitial){
        isInitial = false;
        return;
      }
      
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

      const response = await fetch('https://react-advanced-redux-d9c3b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );

      if(!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully.'
      }));

    

      const responseData = await response.json();
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed.'
      }));
    });
    
    
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification 
        status={notification.status} 
        title={notification.title} 
          message={notification.mesage}
        />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
    
  );
}

export default App;
