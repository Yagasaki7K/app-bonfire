import styled from 'styled-components'

const HomeDetails = styled.div`
    background: url('https://images.unsplash.com/photo-1475738972911-5b44ce984c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=1080') no-repeat center;
    
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.3);

        img {
            width: 50rem;
        }

        h1 {
            margin: 2rem 0;
            
        }

        p {
            width: 40rem;

            span {
                color: #ff9580;
            }
        }

        button {
            margin-top: 2rem;
            padding: 1.5rem 2rem;
            font-size: 1.5rem;
            background: #ff9580;
            color: #fff;
            border: none;
            border-radius: 5rem;
            box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
            cursor: pointer;

            :hover {
                transition: 1s;
                background: #ff6f5e;
            }
        }
    }
`

export default HomeDetails