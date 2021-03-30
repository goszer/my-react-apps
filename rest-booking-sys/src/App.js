import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import {StoreProvider} from './services/AppContext';

import NewBookingForm from './components/NewBookingForm';
import BookingList from "./components/BookingListI";
import {bookingDataReducer} from "./services/BookingDataReducer";

function App() {
    return (
        <div className="App">
            <StoreProvider initialState={[]} reducer={bookingDataReducer} >
                <NewBookingForm/>
                <BookingList />
            </StoreProvider>
        </div>
    );
}

export default App;
