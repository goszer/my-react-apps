import React from "react";

import { Button, Label, Modal } from "semantic-ui-react";
import useTvShowTrailerApi from "../hooks/useTvShowTrailerApi";
import ReactPlayer from 'react-player'

const TvShowTrailer = (id) => {
    const [open, setOpen] = React.useState(false);
    const { trailers, isLoaded, error } = useTvShowTrailerApi(id);

    const filterTrailer = () => {
        if (!isLoaded || error) {
            return [];
        }
        const realTrailer = trailers.filter((t) =>
            t.type.toLowerCase().includes('trailer')
        );
        const videoKey = realTrailer[0].key;
        return videoKey;
    };

    return (
        <Modal
            basic
            closeIcon
            size='small'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Watch Trailer</Button>}
        >
            <Modal.Content>
                <ReactPlayer
                    controls
                    playing = {true}
                    url={`https://youtu.be/${filterTrailer()}`}
                />
            </Modal.Content>
            {/* <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions> */}
        </Modal>
    );
};


export default TvShowTrailer;
