import {
    Container
} from './styles';

export function CommentForm() {
    return (
        <Container>
            <strong>Deixe seu feedback</strong>
            <textarea
                placeholder="Deixe um comentário"
            />
            <footer>
                <button type="submit">Comentar</button>
            </footer>
        </Container>
    );
}