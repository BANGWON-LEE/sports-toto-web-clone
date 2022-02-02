import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import BodyDetail from "../../containers/index/BodyDetail";
import FooterForm from "../footer/FooterForm";

const IndexForm = () => {
    return (
        <>  
            <HeaderDetail />
            <BodyDetail/>
            <FooterForm/>
        </>
    )
}

export default IndexForm;