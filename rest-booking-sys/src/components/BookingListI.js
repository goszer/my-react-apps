import {List} from 'semantic-ui-react';

const BookingListItem = ({id, name, phone, guests, date, time}) => {

    return (
      <List key={`listItem:${id}`}>
          <List.Item>
              <List.Content>{name}</List.Content>
          </List.Item>
      </List>
    );

}

export default BookingListItem;