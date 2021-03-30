import {List} from 'semantic-ui-react';
import {useStore} from "../services/AppContext";

const BookingList = () => {
    const [bookingData] = useStore();
    const elements = bookingData.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <>
                <List.Item key={id}>
                    <b>Guest name: </b> {itemProps.name} <br/>
                    <b>Number of Contact:</b> {itemProps.phone} <br/>
                    <b>Number of Guests:</b>{itemProps.guests} <br/>
                    <b>Date and Time:</b> {new Date(itemProps.dateTime).toString()} <br/>
                </List.Item>
                <hr/>
            </>
        )
    });

    return (
        <List>
            {elements}
        </List>
    );
}

export default BookingList;