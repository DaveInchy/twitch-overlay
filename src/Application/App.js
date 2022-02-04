import react from 'react';

import { cwd } from 'process';
import { path } from 'path';
import { fs } from 'fs';

import { addClasses, addStyles } from '../Components/Classes/Element';
import { Wrapper, Container, Section } from '../Components/Modules/Containers';

export default class App extends react.Component {

    render() {

        var logoPath = './src/Resources/logo.svg';
        var logoResolved = path.resolve(cwd(), logoPath);

        var logoImg = logoResolved ? <>
            <img src={fs.readFileSync(logoResolved)} alt="logo" />
        </> : <>
            <h1 className="text-light text-center text-8xl">New World</h1>
        </>;

        return (
            <Wrapper
                className={addClasses(`
                    bg-dark bg-opacity-10 min-h-screen p-12 border-white border-2 border-dashed
                `, (this.props.class ? this.props.class : ""))}

                style={addStyles(`
                    padding: 25px;
                `, (this.props.styles ? this.props.styles : {}))}
            >

                <Section id="overlay-top">
                    <Container id="overlay-top-center">
                        {logoResolved ? <img src={logoImg} alt="logo" /> : <h1 className="text-light text-center text-8xl">New World</h1>}
                        <hr className="text-light text-center max-w-xl mx-auto my-3 border-white border-2"/>
                        <p className="text-light text-center text-4xl">Custom Stream Overlay</p>
                    </Container>
                </Section>

            </Wrapper>
        );
    }
}