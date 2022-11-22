import styled from 'styled-components';

export const Container = styled.div`
    #page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        /* overflow-y: hidden; */
        
    }
    #banner {
            padding: 2rem;
            #hero {
                > img {
                    display: none;
                }

                #headlines {
                    font-family: 'Poppins', sans-serif;
                    text-align: left;

                    
                    h1 {
                        font-size: clamp(2.4rem, 2vw, 4rem);
                        font-weight: 500;
                    }

                    p {
                        font-size: clamp(1.2rem, 2vw, 1.6rem);
                        line-height: 2.24rem;
                    }
                }
            }
        }

        main {
            h2 {
                padding: 0 2rem;

            }

        }

    /* display: grid;
    grid-template-rows: 9.6rem auto 7.8rem; */

    /* #banner {
        

        display: flex;

        img {
            height: 42rem;
            width: 65rem;
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: -7rem;
        }

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
    } */
`