import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

type Client = {
  projectId: string,
  dataset: string,
  token: string,
  useCdn: boolean
}

// create instance of sanityClient
// this is how you connect your frontend to your sanity studio
const options: Client = {
  //your project ID
  projectId: '3gkmadc4',
  //your dataset; defaults to production
  dataset: 'production',
  token: '',
  useCdn: true
}

const client = sanityClient(options);

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

export { client, urlFor }