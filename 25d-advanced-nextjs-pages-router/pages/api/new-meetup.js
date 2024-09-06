import { MongoClient } from 'mongodb';
// /api/new-meetup

async function handler(req, res) {
    // Figure if its POST, GET, etc.
    if(req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://{{username}}:{{password}}@udemy-test.ehar5.mongodb.net/meetups?retryWrites=true&w=majority&appName=Udemy-Test')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();
        
        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;