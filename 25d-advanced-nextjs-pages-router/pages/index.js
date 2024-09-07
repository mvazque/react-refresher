import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://wallpapers.com/images/high/st-paul-dome-sky-cloudy-b3vk37rdgkh5pgyu.webp',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://wallpapers.com/images/high/st-paul-one-new-change-iixyg3spysk3xqjq.webp',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a Second meetup!'
    }
];

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://{{username}}:{{password}}@udemy-test.ehar5.mongodb.net/meetups?retryWrites=true&w=majority&appName=Udemy-Test')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}

export default HomePage;