export const addNewBooking = (newBooking) => {
    return {
        type: "ADD",
        newBooking: newBooking
    }
}

export const bookingDataReducer = (bookingData, action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...bookingData,
                action.newBooking
            ]
    }
}