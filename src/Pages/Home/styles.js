import styled from 'styled-components';

export const Container = styled.div`
    #page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    #banner {
        width: 100%;
        #hero {
            
            background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 0 0 .8rem .8rem;
            padding: 2rem;
            width: 100%;


                > img {
                    display: none;
                }

                #headlines {
                    font-family: 'Poppins', sans-serif;
                    text-align: left;

                    
                    h1 {
                        font-size: clamp(2.4rem, 4vw, 4rem);
                        font-weight: 500;
                    }

                    p {
                        font-size: clamp(1.2rem, 3vw, 1.6rem);
                        line-height: 2.24rem;
                    }
                }
            }
        }

        main {
            padding: 0 2rem 9rem;
            width: 100%;
            margin: clamp(2rem, 2vh, 4rem) auto;
            /* margin-bottom: clamp(2rem, 2vh, 4rem); */
            /* display: flex; */
            /* flex-direction: column;
            align-items: center;
            justify-content: center; */

            section {
                margin-bottom: clamp(2rem, 2vh, 4rem);
                /* max-width: 112rem; */

            }

            h2 {
                padding: 0 2rem;
                margin-bottom: clamp(1.2rem, 2vh, 3.2rem);
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: clamp(2rem, 3vw, 3.2rem);
            }

        }

        @media (min-width: 960px) {

        display: grid;
        grid-template-rows: 9.6rem auto 7.8rem;

        #banner {
            display: flex;

            #hero {
                background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 8px;

                position: relative;

                width: 100%;
                max-width: 112rem;
                height: 26rem;

                margin: 16.4rem auto;

                display: flex;
                justify-content: flex-end;
                align-items: center;

                img {
                    display: flex;
                    height: 42rem;
                    width: 65rem;
                    position: absolute;
                    z-index: 1;
                    bottom: -1.3rem;
                    left: -7rem;
                }

                #headlines {             
                    padding: 4.6rem;

                    h1 {
                        font-size: 4rem;
                        line-height: 5.6rem;
                    }

                    p {
                        font-size: 1.6rem;
                        line-height: 2.24rem;
                    }
                    
                }
            }
        }
}
`