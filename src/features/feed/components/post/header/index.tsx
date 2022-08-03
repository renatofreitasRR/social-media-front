import {
    Container,
    Author
} from './styles';

export function Header() {
    return (
        <Container>
            <Author>
                <img src="https://avatars.githubusercontent.com/u/59577922?v=4" alt="" />
                <div>
                    <strong>Renato Freitas</strong>
                    <span>C# Developer</span>
                </div>
            </Author>
            <time title="11 de Maio as 08:00" dateTime="2022-05-11 08:00:30">Publicado há 1h</time>
        </Container>
    );
}