import { PencilLine } from 'phosphor-react';

import {
    Container,
    Profile,
    Footer
} from './styles';

export function SideBar() {
    return (
        <Container>
            <img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <Profile>
                <img src="https://avatars.githubusercontent.com/u/59577922?v=4" alt="" />
                <strong>Renato Freitas</strong>
                <span>Web Developer</span>
            </Profile>
            <Footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </Footer>
        </Container>
    );
}