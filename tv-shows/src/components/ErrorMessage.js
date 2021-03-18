import { Message } from "semantic-ui-react";
import PropTypes from 'prop-types';

const ErrorMessage = ({msg}) => {
    return (
        <Message negative>
            <Message.Header>
                {msg ?? "ERROR"}
            </Message.Header>
        </Message>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string,
}

export default ErrorMessage;
