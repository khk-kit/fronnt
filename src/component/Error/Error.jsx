import React, { Fragment } from 'react';

const Error = () => {
    document.title = 'Page Error | BRAVE Athleisure';
  return (
    <Fragment>

        <main>

            <section class="error__area error__pt-300 error__pb-315">
                <div class="container">
                    <div class="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                        <div class="error__content text-center">
                            <div class="error__number">
                                <h1>404</h1>
                            </div>
                            <span>That page can’t be found.</span>
                            
                            <p>Sorry for the inconvenience. Go to our homepage or check out our latest collections.</p>

                            <a href="/" class="s-btn s-btn-2 s-btn-big">Back to Home page</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    </Fragment>
  )
}

export default Error