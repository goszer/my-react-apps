import { nanoid } from "nanoid";

import React, {useState } from 'react';
import {Header, Input, Label, Form, Button} from 'semantic-ui-react';

import {addNewBooking } from "../services/BookingDataReducer";
import { useStore } from "../services/AppContext";

const NewBookingForm = () => {
    const [, dispatcher] = useStore();

    const emptyForm = {
        name: '',
        phone: '',
        guests: '',
        dateTime: new Date().toISOString().substr(0, 16)
    };

    const [form, setForm] = useState(emptyForm);

    const genericOnChange = ({ currentTarget: { name, value } }) => {
        setForm((state) => ({...state, [name]: value}));
    }

    const handleSubmit = (e) => {
        dispatcher(addNewBooking({id: nanoid(10), ...form }));
        setForm(emptyForm);
    }

    return (
        <>
            <Header>Booking System</Header>
            <Form>
                <Form.Field>
                    <Label>Full name</Label>
                    <Input name="name" placeholder="Full name" value={form.name} onChange={genericOnChange} />
                </Form.Field>
                <Form.Field>
                    <Label>Telephone of contact</Label>
                    <Input name="phone" placeholder="Phone number" value={form.phone} onChange={genericOnChange}/>
                </Form.Field>
                <Form.Field>
                    <Label>Number of guests</Label>
                    <Input name="guests" placeholder="Number of guests" value={form.guests} onChange={genericOnChange}/>
                </Form.Field>
                <Form.Field>
                    <Label>Date</Label>
                    <input name="dateTime" type="datetime-local" value={form.dateTime} onChange={genericOnChange}/>
                </Form.Field>
                <Button onClick={handleSubmit}>Book a table</Button>
            </Form>

        </>
    );
}

export default NewBookingForm;