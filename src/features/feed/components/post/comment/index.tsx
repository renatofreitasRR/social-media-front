import { ThumbsUp, Trash } from 'phosphor-react';
import {
    Container,
    CommentBox,
    CommentContent,
    Author,
    CommentFooter
} from './styles';

export function Comment() {
    return (
        <Container>
            <img src="https://avatars.githubusercontent.com/u/59577922?v=4" alt="" />

            <CommentBox>
                <CommentContent>
                    <header>
                        <Author>
                            <strong>Renato Freitas</strong>
                            <time title="11 de Maio as 08:00" dateTime="2022-05-11 08:00:30">Publicado há 1h</time>
                        </Author>
                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!!</p>
                </CommentContent>
                <CommentFooter>
                    <button>
                        <ThumbsUp size={20} />
                        Curtir <span>20</span>
                    </button>
                </CommentFooter>
            </CommentBox>
        </Container>
    );
}