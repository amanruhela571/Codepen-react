
import { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import Editor from './Editor';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 55vh; 
`

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return(
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onchange={setHtml}
            />
            <Editor 
                heading="CSS"
                icon="*"
                color="blue"
                value={css}
                onchange={setCss}
            />
            <Editor 
                heading="JavaScript"
                icon="{}"
                color="yellow"
                value={js}
                onchange={setJs}
            />
        </Container>
    )
}
export default Code;