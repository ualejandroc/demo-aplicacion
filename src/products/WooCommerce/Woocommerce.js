import WooCommerceAPI from "./WooCommerceAPI";
import Constants from './Config';

var Woocommerce = new WooCommerceAPI({
    url: Constants.URL.root,
    consumerKey: Constants.Keys.ConsumerKey,
    consumerSecret: Constants.Keys.ConsumerSecret,
    wp_api: true,
    version: 'wc/v2',
    queryStringAuth: true,
    wpAPIPrefix:null

});

export default Woocommerce;
