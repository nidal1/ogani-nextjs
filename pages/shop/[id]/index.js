import Base from '../../../components/global/Base

import { useRouter } from "next/dist/client/router";

export default function ShopDetails(params) {
    const route = useRouter();
    console.log(route);
    console.log(route.query.id);
    return (
        <Base>
            <h1>Shop details { }</h1>;
        </Base>
    )
}