import { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

const Page404 = () => {

    return (
        //<div> Page 404</div>
        <Redirect to='/' />
    )
};
export default Page404;