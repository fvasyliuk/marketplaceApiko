import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { Home, NotFound, Auth, Terms, Inbox, Privacy, Bookmarks, Profile, Search, Listings, Users, AddProduct, AddProductModal } from './';



export const routes = {
    home: '/',
    login: '/auth/login',
    register: '/auth/register',
    reset: '/auth/reset', 
    auth: '/auth',
    inbox: '/inbox',
    terms: '/terms',
    privacy: '/privacy',
    bookmarks: '/bookmarks',
    profile: '/profile',
    users: '/users/:id',
    listings: '/listings/:id',
    search: '/search',
    addProduct: '/products/add',
    product: '/products/:id',
    chat: '/inbox/:id',
    saved: '/saved'
};
class ModalSwitch extends React.Component {
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        // set previousLocation if props.location is not modal
        if (
        nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
        ) {
        this.previousLocation = this.props.location;
        }
    }

    render() {
        let { location } = this.props;        
        let isModal = !!(
        location.state &&
        location.state.modal &&
        this.previousLocation !== location
        ); // not initial render

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>                             
                    <PrivateRoute path={routes.inbox} component={Inbox} />        
                    <PrivateRoute isLoggedOut path={routes.auth} component={Auth} />
                    <PrivateRoute exact path={routes.privacy} component={Privacy} />
                    <PrivateRoute exact path={routes.profile} component={Profile} />
                    <PrivateRoute path={routes.addProduct} component={AddProduct} />
                    <Route exact path={routes.terms} component={Terms} />
                    <Route exact path={routes.search} component={Search} />   
                    <Route exact path={routes.listings} component={Listings} /> 
                    <Route exact path={routes.bookmarks} component={Bookmarks} />   
                    <Route path={routes.home} component={Home} />              
                    <Route  component={NotFound} />            
                </Switch>
                {isModal ? <PrivateRoute path={routes.addProduct} component={AddProductModal} /> : null}
            </div>
        );
    }
}


export default function Router() {
    return(
        <BrowserRouter>
            <Route component={ModalSwitch} />                      
        </BrowserRouter>
    )
}

// export default function Router() {
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path={routes.home} component={Home} />        
//                 <PrivateRoute exact path={routes.inbox} component={Inbox} />        
//                 <PrivateRoute isLoggedOut path={routes.auth} component={Auth} />
//                 <PrivateRoute exact path={routes.privacy} component={Privacy} />
//                 <PrivateRoute exact path={routes.profile} component={Profile} />
//                 <Route path={routes.addProduct} component={AddProduct} />
//                 <Route exact path={routes.terms} component={Terms} />
//                 <Route exact path={routes.search} component={Search} />  
//                 <Route exact path={routes.users} component={Users} /> 
//                 <Route exact path={routes.listings} component={Listings} /> 
//                 <Route exact path={routes.bookmarks} component={Bookmarks} />                 
//                 <Route  component={NotFound} />
//             </Switch>            
//         </BrowserRouter>
//     )
// }