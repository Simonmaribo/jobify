import Meta from "./Layout/Meta"
import ScrollToTop from "./Layout/ScrollToTop"

import Footer from "./Layout/Footer"
import { Box } from "@mantine/core"

export default function DefaultLayout({children, title}) {

    return (
        <Box>
            <Meta title={title}/>
            <ScrollToTop/>
            <main>
                {children}
            </main>
            <Footer/>
        </Box>
    )
}