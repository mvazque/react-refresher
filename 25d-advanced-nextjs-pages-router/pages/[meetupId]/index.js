import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail 
            image="https://wallpapers.com/images/high/st-paul-dome-sky-cloudy-b3vk37rdgkh5pgyu.webp"
            title="A First Meetup"
            description="The meetup description"
            address="Some address 5, 12345 Some City"
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://wallpapers.com/images/high/st-paul-dome-sky-cloudy-b3vk37rdgkh5pgyu.webp",
                id: meetupId,
                title: 'First Meeting',
                address: 'Some address 5, 12345 Some City',
                description: 'The meetup description'
            }
        }
    }
}

export default MeetupDetails;