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

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;