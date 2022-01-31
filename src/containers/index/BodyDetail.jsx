import React, {useState} from "react";

import BodyForm from '../../components/index/body/BodyForm'


const BodyDetail = () => {

    const [arrows, setArrows] = useState(false);

    function onArrows() {
        setArrows(true);
    }

    function offArrows() {
        setArrows(false);
    }

    return(
        <BodyForm 
            onArrows={onArrows}
            offArrows={offArrows}
            arrows={arrows}

        />
    )
}

export default BodyDetail