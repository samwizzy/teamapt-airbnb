import { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import { FiUpload, FiHeart, FiShield, FiAward, FiInfo } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineClipboardDocumentCheck, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePersonalInjury, MdOutlineBedroomChild, MdOutlineKingBed, MdBalcony } from "react-icons/md";
import { TbBrandAirtable, TbAirConditioning } from "react-icons/tb";
import { BiShower } from "react-icons/bi";
import { SlDiamond } from "react-icons/sl";
import { SiWegame } from "react-icons/si";
import { HiStar, HiWifi } from "react-icons/hi";
import { StayContext } from "../context/stayContext";
import { DateInput, Divider, Progress } from ".";

const src1 = "https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp";
const src2 = "https://framerusercontent.com/images/UbZMotnt6f6PzRjoEUkUqqPoGE.webp";
const src3 = "https://framerusercontent.com/images/qpfhB78P3kED99kanRfNuDVscmY.webp";

function StayDetailsDialog() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { state, dispatch } = useContext(StayContext);

  const handleClose = () => dispatch({ type: "CLOSE" });

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if ((e.target as Element)?.classList.contains("overlay")) {
        dispatch({ type: "CLOSE" });
      }
    };

    document.addEventListener("click", handleClickAway);

    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [dispatch]);

  return ReactDOM.createPortal(
    <div className={clsx("overlay", { open: state.open })} ref={modalRef}>
      <div role="dialog" className="dialog__lg">
        <button className="dialog__lg__close-icon" onClick={handleClose}>
          <span>✕</span>
        </button>

        <div className="dialog__lg__content">
          <div className="flex gap-4 mb-8">
            <div
              className="w-[60%] h-[480px] col-span-7 row-span-2 dialog__lg__image"
              style={{ backgroundImage: `url(${src1})` }}
            />

            <div className="flex flex-1 flex-col gap-4 flex-nowrap">
              <div className="col-span-5 h-full w-full dialog__lg__image" style={{ backgroundImage: `url(${src2})` }} />
              <div className="col-span-5 h-full w-full dialog__lg__image" style={{ backgroundImage: `url(${src3})` }} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="w-fit flex items-center space-x-2 rounded-xl mb-3 px-3 py-2 border">
                <SiWegame size={20} color="#c73160" />
                <span className="text-sm">Superhost</span>
              </div>

              <header className="flex justify-between">
                <div>
                  <div className="mb-6">
                    <h1 className="font-medium text-3xl leading-snug mb-3">
                      Luxury stay in Weston, Saint James, Barbados
                    </h1>
                    <span className="text-base text-gray-500">Weston, Saint James, Barbados</span>
                  </div>

                  <div className="flex items-center gap-x-8 text-sm text-gray-600">
                    <div className="flex items-center gap-x-4">
                      <MdOutlinePersonalInjury size={24} />
                      <span className="inline-flex items-center gap-x-2"> 8 guests</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <MdOutlineBedroomChild size={24} />
                      <span className="inline-flex items-center gap-x-2"> 4 bedrooms</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <MdOutlineKingBed size={24} />
                      <span className="inline-flex items-center gap-x-2">5 beds</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <BiShower size={24} />
                      <span className="inline-flex items-center gap-x-2">4 baths</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-x-4 w-48 justify-end">
                  <button className="dialog__lg__action-icon">
                    <FiUpload size={20} />
                  </button>
                  <button className="dialog__lg__action-icon">
                    <FiHeart size={20} />
                  </button>
                </div>
              </header>

              <Divider />

              <section>
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="w-12 h-12 grid place-content-center rounded-full bg-red-50 mb-4">
                      <TbBrandAirtable size={24} color="#c73160" />
                    </div>

                    <h3 className="font-medium mb-2">Dedicated workspace</h3>
                    <p className="text-gray-500 text-sm">A private room with wifi that's well-suited for working.</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 grid place-content-center rounded-full bg-red-50 mb-4">
                      <HiOutlineClipboardDocumentCheck size={24} color="#c73160" />
                    </div>

                    <h3 className="font-medium mb-2">Self check-in</h3>
                    <p className="text-gray-500 text-sm">Check yourself in with the keypad.</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 grid place-content-center rounded-full bg-red-50 mb-4">
                      <FaRegCalendarCheck size={24} color="#c73160" />
                    </div>

                    <h3 className="font-medium mb-2">Free cancellation before Jul 25</h3>
                    <p className="text-gray-500 text-sm">A private room with wifi that's well-suited for working.</p>
                  </div>
                </div>
              </section>

              <Divider />

              <section>
                <h2 className="text-lg font-semibold mb-2">About this space</h2>

                <div className="mb-6">
                  <p className="text-gray-500 text-sm">
                    Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna
                    Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one
                    bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two,
                    or if you're stopping through town and need a restful place to retreat.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium mb-2">This space</h3>
                  <p className="text-gray-500 text-sm">
                    An open living, dining, and kitchen area provide ample room in this cozy cottage. French double
                    doors lead you out to the back patio to enjoy your own private outdoor space. A dedicated, covered
                    parking spot for your use. The parking lot is shared with Hillcrest Estate guests.
                  </p>
                </div>

                <a href="" className="text-secondary font-semibold text-sm">
                  Read more
                </a>
              </section>

              <Divider />

              <section>
                <h2 className="text-lg font-semibold mb-8">What this place offers</h2>

                <div className="grid grid-cols-3 items-start place-items-start gap-8 text-sm text-gray-600 mb-8">
                  <div className="w-48 flex items-center gap-x-4">
                    <MdOutlinePersonalInjury size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Kitchen</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <MdBalcony size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Private patio or balcony</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <TbAirConditioning size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Centrail air conditioning</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <HiOutlineBuildingOffice2 size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Dedicated workspaces</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <HiWifi size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Wifi</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <MdOutlineBedroomChild size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Heating</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <MdOutlineKingBed size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">55” 4k TV</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <MdOutlineBedroomChild size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">1 parking space</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <MdOutlineKingBed size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Security cameras</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <BiShower size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Free dryer - in unit</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <BiShower size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Free washer - in unit</span>
                  </div>
                  <div className="w-48 flex items-center gap-x-4">
                    <BiShower size={24} className="shrink-0" />
                    <span className="inline-flex items-center gap-x-2">Ceiling fans</span>
                  </div>
                </div>

                <a href="" className="text-primary font-semibold text-sm">
                  View more
                </a>
              </section>

              <Divider />

              <section>
                <header className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold mb-4">Reviews</h2>

                  <span className="inline-flex text-sm text-gray-500">
                    <HiStar size={20} color="#000" /> &nbsp;5.00 — 124 reviews
                  </span>
                </header>

                <div className="rounded-xl border p-2">
                  <ul>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Cleanliness</span>
                      <Progress value={100} rate={5.0} />
                    </li>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Accuracy</span>
                      <Progress value={98} rate={4.9} />
                    </li>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Communication</span>
                      <Progress value={95} rate={4.8} />
                    </li>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Location</span>
                      <Progress value={95} rate={4.8} />
                    </li>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Check-in</span>
                      <Progress value={98} rate={4.9} />
                    </li>
                    <li className="flex items-center justify-between p-3">
                      <span className="text-sm">Value</span>
                      <Progress value={85} rate={4.2} />
                    </li>
                  </ul>
                </div>
              </section>

              <Divider />

              <section>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <article className="border p-6 rounded-2xl">
                    <div className="flex gap-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full border overflow-hidden">
                        <img src="https://i.pravatar.cc/300" alt="" />
                      </div>
                      <div>
                        <h3 className="font-medium">Steve</h3>
                        <span className="text-sm text-gray-500">March 2023</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great
                        wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.
                      </p>
                    </div>
                  </article>
                  <article className="border p-6 rounded-2xl">
                    <div className="flex gap-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full border overflow-hidden">
                        <img src="https://i.pravatar.cc/300" alt="" />
                      </div>
                      <div>
                        <h3 className="font-medium">Emily</h3>
                        <span className="text-sm text-gray-500">March 2023</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        The location was very quiet and peaceful. We loved the wood stove and the location was
                        convenient, however the interior was not in the best shape..
                      </p>
                    </div>
                  </article>
                  <article className="border p-6 rounded-2xl">
                    <div className="flex gap-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full border overflow-hidden">
                        <img src="https://i.pravatar.cc/300" alt="" />
                      </div>
                      <div>
                        <h3 className="font-medium">Daniel</h3>
                        <span className="text-sm text-gray-500">March 2023</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which
                        heated up the little cabin very effectively.
                      </p>
                    </div>
                  </article>
                  <article className="border p-6 rounded-2xl">
                    <div className="flex gap-x-4 mb-6">
                      <div className="w-14 h-14 rounded-full border overflow-hidden">
                        <img src="https://i.pravatar.cc/300" alt="" />
                      </div>
                      <div>
                        <h3 className="font-medium">Jackson</h3>
                        <span className="text-sm text-gray-500">March 2023</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Abbe's tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space
                        was comfortable and the wood stove kept us very warm.
                      </p>
                    </div>
                  </article>
                </div>

                <a href="" className="text-primary font-semibold text-sm">
                  View more
                </a>
              </section>

              <Divider />

              <section>
                <h2 className="text-lg font-semibold mb-6">Where you'll be</h2>

                <div className="w-full mb-6" style={{ height: "400px" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=13.215804,-59.640795&amp;z=13&amp;output=embed"
                    style={{ height: "100%", width: "100%", border: "0px" }}
                  ></iframe>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium mb-4">Weston, Saint James, Barbados</h3>
                  <p className="text-sm text-gray-500">
                    The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue
                    beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.
                  </p>
                </div>

                <a href="" className="text-primary font-semibold text-sm">
                  View more
                </a>
              </section>

              <Divider />

              <section>
                <h2 className="text-lg font-semibold mb-6">Host</h2>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-x-4">
                    <div className="w-14 h-14 rounded-full border overflow-hidden">
                      <img src="https://i.pravatar.cc/300" alt="" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hosted by Brenda</h3>
                      <span className="text-xs text-gray-500">Joined in August 2014</span>
                    </div>
                  </div>

                  <button className="rounded-2xl border border-gray-500 px-6 py-3 text-sm">Contact Host</button>
                </div>

                <div className="flex items-center gap-x-8 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-x-3">
                    <HiStar size={20} color="#000" />
                    <span>2,635 reviews</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <FiShield size={20} />
                    <span>Identity verified</span>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <FiAward size={20} />
                    <span>Superhost</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful
                  area. Vacations are special and we do our very best to make them affordable, enjoy…
                </p>

                <a href="" className="text-primary font-semibold text-sm">
                  View more
                </a>
              </section>
            </div>

            <div className="col-span-4">
              <div className="p-2 sticky top-0">
                <div className="rounded-2xl p-6 bg-[#F5F5F4] mb-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-semibold">$483</span>
                      <span>/</span>
                      <span className="text-sm text-gray-500">night</span>
                    </div>
                    <span className="inline-flex text-sm text-gray-500">
                      <HiStar size={20} color="#000" /> &nbsp;5.00
                    </span>
                  </div>

                  <div>
                    <form>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="text-xs text-gray-500" htmlFor="check-in">
                            Check In
                          </label>
                          <DateInput id="check-in" placeholder="6/14/2023" className="bg-white" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500" htmlFor="check-out">
                            Check Out
                          </label>
                          <DateInput id="check-out" placeholder="6/14/2023" className="bg-white" />
                        </div>
                      </div>

                      <table className="w-full border-separate border-spacing-y-2 text-sm">
                        <tbody>
                          <tr>
                            <td>
                              <span className="inline-flex items-center">
                                6 nights&nbsp; <FiInfo color="#717171" />
                              </span>
                            </td>
                            <td align="right">$2,199</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="inline-flex items-center">
                                Cleaning fee&nbsp; <FiInfo color="#717171" />
                              </span>
                            </td>
                            <td align="right">$85</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="inline-flex items-center">
                                Airbnb service fee&nbsp; <FiInfo color="#717171" />
                              </span>
                            </td>
                            <td align="right">$322</td>
                          </tr>
                        </tbody>
                      </table>

                      <Divider />

                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold">Total</h3>
                          <span className="text-xs text-gray-500">Before taxes</span>
                        </div>
                        <span>$2,606</span>
                      </div>

                      <button className="bg-secondary text-white w-full rounded-lg text-center py-3">Reserve</button>
                    </form>
                  </div>
                </div>

                <div className="rounded-3xl p-4 bg-[#d43b510a] border border-gray-150">
                  <div className="flex items-start gap-x-6">
                    <div className="shrink-0 mt-1.5">
                      <SlDiamond size={32} color="#c73160" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">This is a rare find</h3>
                      <p className="text-gray-500 text-sm leading-5">
                        Kathryn's place on Airbnb is usually fully booked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}

export default StayDetailsDialog;
