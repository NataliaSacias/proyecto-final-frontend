import React, { useEffect } from "react";
import { Portadapago } from "../component/PortadaPago";

export const Portadapago = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<div>
        <Portadapago />
    </div>)

};
