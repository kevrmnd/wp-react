import { createStore } from 'redux'
import reducer from './reducers'

const DEFAULT_STATE = {
	theme: {
		blogname: 'Wordpress test',
		blogdescription: 'Doing things...',
		posts_per_page: 10
	},
	authors: [
		{
			id: 1,
			user_nicename: 'admin',
			user_url: 'http://www.google.com'
		}
	],
	pages: [
		{
			id: 2,
			post_title: 'Page d’exemple',
			post_content: 'Voici un exemple de page. Elle est différente d’un article de blog, en cela qu’elle restera à la même place, et s’affichera dans le menu de navigation de votre site (en fonction de votre thème). La plupart des gens commencent par écrire une page « À Propos » qui les présente aux visiteurs potentiels du site.',
			post_author: 1,
			post_date: '2017-11-30 23:14:25',
			post_status: 'publish'
		}
	]
}

const store = createStore(
	reducer, 
	DEFAULT_STATE,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
