import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import PageLayout from "../lib/components/page-layout";
import { PageRoutes } from "../lib/constants";

const SignIn: React.FC = () => {
  return (
    <PageLayout>
      <div className="main-content mt-0">
        <section className="min-vh-100 mb-8">
          <div
            className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
            style={{
              backgroundImage: "url('/assets/img/curved-images/img-6.jpg')",
            }}
          >
            <span className="mask bg-gradient-dark opacity-6"></span>
          </div>
          <div className="container">
            <div className="row mt-lg-n10 mt-md-n11 mt-n10">
              <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
                <div className="card card-bg card-shadow border-0">
                  <div className="card-body">
                    <Authenticator>
                      {({ signOut, user }) => (
                        <main>
                          <h1>Hello {user?.username}</h1>
                          <button onClick={signOut}>Sign out</button>
                        </main>
                      )}
                    </Authenticator>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SignIn;
