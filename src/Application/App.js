/* eslint-disable no-unused-vars */
import react from 'react';

import { makeClasses, makeStyles, combineClasses, combineStyles } from '../Components/Classes/Element';
import { Wrapper, Container, Section } from '../Components/Modules/Containers';

import logoSrc from '../Resources/new_world/NW-logo.svg';
import shadowSrc from '../Resources/new_world/NWshadow.svg';

export default class App extends react.Component {

    render() {

        const LogoClasses = makeClasses('text-center m-auto w-auto h-48');

        var Logo = <img className={LogoClasses} src={shadowSrc} alt="logo" />;

        return (
            <Wrapper
                class={combineClasses(`
                    bg-dark bg-opacity-30 min-h-screen w-full p-10 border-white border-6 border-dashed
                `, (this.props.class ? this.props.class.toString() : ""))}

                style={combineStyles(`
                    padding: 25px;
                `, (this.props.style ? this.props.style : ""))}
            >

            <Section id="overlay-top">
                <h1 className="text-light text-center">
                    <span>{ true ? Logo : "NEW WORLD"}</span>
                </h1>
            </Section>

            </Wrapper>
        );
    }
}