import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./Navigation";

export default function Layout() {
    return (
        <>
            <NavigationBar />
            <Container className="mt-3">
                <Outlet />
            </Container>
        </>
    )
}