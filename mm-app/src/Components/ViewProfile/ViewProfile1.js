import React from "react";
import img1 from "../images/girl.jpeg";
import "./vp.css";

function ViewProfile1() {
  return (
    <div>
      <section className="col-sm-12">
        <div className="container py-lg-4 py-md-3 py-2">
          <div className="row row-vp">
            <div className="col-md-6 pro-img">
              <img src={img1} alt="Tamil Matrimony" />

              
            <score-card className="sc">
            <div className="row mt-4">
            <div className="col-md-6">
            <div data-toggle="tooltip" className="ms-5 mb-2">Match Score <span>90%</span>
            </div>
            <div data-toggle="tooltip" className="progress" title="Your profile matches 19/21 of T Deepa Lakshmi’s preferences!">
            <div role="progressbar" aria-valuemin="0" aria-valuemax="100" className="progress-bar-vp" ></div></div></div></div>
            </score-card>
         
            </div>

            <div className="col-md-6 para">
              <span>Sudha</span>
              <div className="post-info">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                Date of Birth{" "}
              </div>
              <div className="post-info">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                B.Tech.,Manager{" "}
              </div>

              <div className="post-info">
                <i class="fa fa-info-circle" aria-hidden="true"></i> Father
                Kulam{" "}
              </div>
              <div className="post-info">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                Mother Kulam{" "}
              </div>
              <div className="post-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                Star <i class="fa fa-check-circle" aria-hidden="true"></i>{" "}
                Income <i class="fa fa-check-circle" aria-hidden="true"></i>{" "}
                Location
              </div>
              <div className="post-info">
                <i class="fa fa-check-circle" aria-hidden="true"></i> Occupation{" "}
                Education <i class="fa fa-check-circle" aria-hidden="true"></i>{" "}
                Caste <i class="fa fa-check-circle" aria-hidden="true"></i> Age{" "}
              </div>

              <div className="post-info">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                Coimbatore,Tamil Nadu ,India{" "}
              </div>
            </div>

            <div className="row ms-5">
              <div className="col-md-8 mt-5">
                <h3 className="post-content-title mt-4">Basic detail</h3>
            <div className="row">
                <div className="col-md-6">
                <ul class="details-list">
                  <li>
                    <strong>Name :</strong> Sudha{" "}
                  </li>
                  <li>
                    <strong>Profile Created for :</strong>Brother{" "}
                  </li>
                  <li>
                    <strong>Age :</strong> 24{" "}
                  </li>
                  <li>
                    <strong>Height :</strong> 172 cm{" "}
                  </li>
                  </ul>
                  </div>
                  <div className="col-md-6">
<ul>
                  <li>
                    <strong>Gender :</strong> Female{" "}
                  </li>
                  <li>
                    <strong>Marital Status :</strong> unmarried{" "}
                  </li>
                  <li>
                    <strong>Mother Tongue :</strong> Tamil{" "}
                  </li>
                  <li>
                    <strong>Physical Status :</strong> Normal{" "}
                  </li>
                </ul>
                </div>
                </div>
              </div>
            </div>

            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">Contact details</h3>
              <ul className="details-list">
                <a href="pay.php">
                  <li>
                    <strong>Contact Number : </strong>
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    9025594648
                  </li>
                </a>

                <a href="pay.php">
                  <li>
                    <strong>Send mail :</strong>
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    contact@mutharaiyarmatrimony.co.in
                  </li>
                </a>
              </ul>
            </div>

            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">Religious Information</h3>
              <ul className="details-list">
                <li>
                  <strong>Religion : </strong>Hindu{" "}
                </li>
                <li>
                  <strong>Caste :</strong>mutharaiayar{" "}
                </li>
                <li>
                  <strong>Sub Caste :</strong> muthu{" "}
                </li>

                <li>
                  <strong>Dosham :</strong> no{" "}
                </li>
              </ul>
            </div>
            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">
                Professional Information
              </h3>
              <ul className="details-list">
                <li>
                  <strong>Education : </strong>B.Tech.{" "}
                </li>
                <li>
                  <strong>Occupation :</strong> Manager{" "}
                </li>
                <li>
                  <strong>Employed in :</strong> Government{" "}
                </li>
                <li>
                  <strong>Annual Income :</strong>250000{" "}
                </li>
              </ul>
            </div>
            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">Family Details</h3>
              <ul className="details-list">
                <li>
                  <strong>Marital Status : </strong>unmarried{" "}
                </li>
                <li>
                  <strong>Family Status : </strong>Middle Class{" "}
                </li>

                <li>
                  <strong>Family Type : </strong>Joint{" "}
                </li>
                <li>
                  <strong>Physical Status: </strong> Normal{" "}
                </li>
                <li>
                  <strong>Number of Brothers :</strong> 1{" "}
                </li>
                <li>
                  <strong>Married Brothers :</strong> 1{" "}
                </li>
                <li>
                  <strong>Number of Sisters :</strong>2{" "}
                </li>
                <li>
                  <strong>Married Sisters :</strong>1{" "}
                </li>
              </ul>
            </div>

            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">Lifestyle </h3>
              <ul className="details-list">
                <li>
                  <strong>Eating Habits : </strong>Vegetarian{" "}
                </li>
                <li>
                  <strong>Drinking Habits :</strong> Light / Social drinker{" "}
                </li>
                <li>
                  <strong>Smoking Habits :</strong> Light / Social smoker{" "}
                </li>
              </ul>
            </div>
            <line className="btm-bdr-line"></line>

            <div className="single-bg-white">
              <h3 className="post-content-title mb-4">Partner Preference </h3>
              <table width="100%" border="0">
                <tbody>
                  <tr>
                    {/* <td width="25%">
                                            <img src="../images/img.jpg" class="img-circle"/>
                                            </td> */}
                    <td>
                      <p>You Match 8/14 her preference</p>
                    </td>

                    {/* <td width="25%"><img src="../images/img.jpg" class="img-circle"/></td>
                     */}
                  </tr>
                </tbody>
              </table>

              <ul className="details-list">
                <li>
                  <strong>Marital Status : </strong> Any{" "}
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Mother Tongue :</strong> Any{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Age :</strong>24{" "}
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Height :</strong> 172 cm{" "}
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </li>

                <li>
                  <strong>Physical Status :</strong>Any
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Eating Habits : </strong>Any{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Drinking Habits :</strong> Any{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Smoking Habits :</strong> Any{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Education : </strong>
                  BCA,
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </li>

                <li>
                  <strong>Occupation :</strong>
                  Software Professional,
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>

                <li>
                  <strong>Employed in :</strong> Business{" "}
                  <i class="fa fa-times-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Annual Income :</strong>300000{" "}
                  <i class="fa fa-times-circle" aria-hidden="true"></i>{" "}
                </li>
                <li>
                  <strong>Caste :</strong> mutharaiayar{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
                <li>
                  <strong>Sub Caste :</strong> muthu{" "}
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewProfile1;
