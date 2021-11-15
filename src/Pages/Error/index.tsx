import { Container } from "./styles";
import Typewriter from 'typewriter-effect';

export function Error(){

    return (
        <Container>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('ERROR 404')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('THIS PAGE IS NOT FOUND')
                    .start();
                }}
            />
        </Container>
    )
}