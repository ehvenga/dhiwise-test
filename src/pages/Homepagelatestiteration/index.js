import React from "react";

import { Column, Row, Img, Text, Button, Stack, Line, List } from "components";

const HomepagelatestiterationPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-questrial mx-[auto] 2xl:pb-[100px] 3xl:pb-[120px] lg:pb-[77px] xl:pb-[88px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-black_900 items-center justify-end lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius5 shadow-bs4 w-[100%]">
              <Img
                src="images/img_financepeerlog.png"
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] w-[7%]"
                alt="FinancepeerLog"
              />
              <Text className="cursor-pointer font-manrope hover:font-medium font-medium lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_100 tracking-ls1 w-[auto]">
                Student
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_100 tracking-ls1 w-[auto]">
                Institute
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-medium font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_100 tracking-ls1 w-[auto]">
                Products
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                alt="arrowdown"
              />
              <Text className="cursor-pointer font-manrope hover:font-medium font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_100 tracking-ls1 w-[auto]">
                Contact Us
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-medium font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_100 tracking-ls1 w-[auto]">
                About Us
              </Text>
              <Button
                className="font-normal font-questrial lg:ml-[427px] xl:ml-[489px] 2xl:ml-[550px] 3xl:ml-[660px] lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[11%]"
                shape="RoundedBorder5"
                variant="FillLime100"
              >
                Login
              </Button>
            </Row>
          </header>
        </Column>
        <Column className="items-end lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] 3xl:px-[115px] lg:px-[74px] xl:px-[85px] 2xl:px-[96px] w-[100%]">
          <Row className="justify-end w-[89%]">
            <Column className="lg:mt-[108px] xl:mt-[123px] 2xl:mt-[139px] 3xl:mt-[166px] w-[42%]">
              <Text className="font-normal lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[58%]">
                Pay Your Fees &<br />
                Get Rewarded
              </Text>
              <Row className="items-center lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[79%]">
                <Img
                  src="images/img_group119.svg"
                  className="lg:h-[46px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] w-[1%]"
                  alt="Group119"
                />
                <Row className="bg-white_A700 lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius12 shadow-bs5 w-[93%]">
                  <Stack className="font-gotham lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]">
                    <Img
                      src="images/img_star1.svg"
                      className="absolute bg-gradient1  lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] rounded-radius3 lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                      alt="StarOne"
                    />
                    <Text className="absolute font-black h-[max-content] inset-[0] justify-center m-[auto] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-shadow-ts text-white_A700 w-[max-content]">
                      %
                    </Text>
                  </Stack>
                  <Text className="font-manrope font-semibold lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[68%]">
                    Upto 10% Cashback on your fee payments
                  </Text>
                </Row>
              </Row>
              <Column className="font-manrope lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[71%]">
                <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900_6c tracking-ls1 w-[auto]">
                  Your name
                </Text>
                <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                  Rishi Sharma
                </Text>
                <Line className="bg-black_900 h-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]" />
                <Text className="font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                  Your number
                </Text>
                <Line className="bg-black_900 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                <Row className="bg-gray_900 font-questrial items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[100%]">
                  <Text className="font-normal ml-[4px] my-[1px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                    Pay your fees now
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[13%]"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <Column className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[210px] xl:mt-[241px] 2xl:mt-[271px] 3xl:mt-[325px] w-[93%]">
                <Text className="font-normal font-questrial lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[3px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[45%]">
                  Leo Coins
                  <br />
                  Earn & Burn
                </Text>
                <Text className="font-manrope font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[auto]">
                  Understand how Leo-coins and rewards work
                </Text>
                <Stack className="font-questrial lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[77%]">
                  <Row className="absolute bg-gray_900 items-center justify-between lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 top-[0] w-[100%]">
                    <Text className="font-normal ml-[4px] my-[1px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                      Explore now
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[13%]"
                      alt="arrowright One"
                    />
                  </Row>
                  <Img
                    src="images/img_vector654.svg"
                    className="absolute bottom-[0] lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] inset-x-[0] mx-[auto] w-[7%]"
                    alt="Vector654"
                  />
                </Stack>
              </Column>
            </Column>
            <Column className="font-manrope w-[58%]">
              <Stack className="lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] w-[100%]">
                <Stack className="absolute lg:h-[528px] xl:h-[604px] 2xl:h-[679px] 3xl:h-[815px] left-[0] w-[91%]">
                  <Row className="absolute justify-between top-[0] w-[100%]">
                    <div className="bg-gray_300_75 lg:h-[186px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] rounded-radius76 w-[26%]"></div>
                    <div className="bg-gray_300 lg:h-[366px] xl:h-[419px] 2xl:h-[471px] 3xl:h-[565px] lg:mt-[134px] xl:mt-[153px] 2xl:mt-[173px] 3xl:mt-[207px] rounded-radius1495 w-[52%]"></div>
                  </Row>
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[0] items-center left-[11%] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] shadow-bs6 w-[53%]"
                    style={{
                      backgroundImage: "url('images/img_group117.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-repeat items-center justify-center mb-[1px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius3615 w-[98%]"
                      style={{
                        backgroundImage: "url('images/img_group15.png')",
                      }}
                    >
                      <Column className="bg-gray_100 items-center justify-end mt-[1px] lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[42px] rounded-radius1506 w-[98%]">
                        <Stack className="bg-white_A700 lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:px-[49px] xl:px-[56px] 2xl:px-[64px] 3xl:px-[76px] rounded-radius50 lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]">
                          <Img
                            src="images/img_vector667.svg"
                            className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] w-[17%]"
                            alt="Vector667"
                          />
                        </Stack>
                        <Text className="font-light leading-[normal] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 text-center tracking-ls1 w-[95%]">
                          Your fees has been successfully paid!
                        </Text>
                      </Column>
                      <Column className="bg-gray_100 items-center justify-end lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] p-[1px] rounded-radius1506 w-[98%]">
                        <Stack className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[68%]">
                          <Text className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[max-content]">
                            You earned Leo Coins
                          </Text>
                          <Img
                            src="images/img_map.svg"
                            className="absolute 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] right-[0] top-[25%] w-[6%]"
                            alt="map"
                          />
                          <Img
                            src="images/img_eye.svg"
                            className="absolute xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] left-[0] top-[0] w-[6%]"
                            alt="eye"
                          />
                        </Stack>
                        <Row className="mr-[auto] mt-[1px] w-[76%]">
                          <Img
                            src="images/img_signal.svg"
                            className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[8%]"
                            alt="signal"
                          />
                          <Img
                            src="images/img_vector27.svg"
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] w-[7%]"
                            alt="VectorTwentySeven"
                          />
                          <Img
                            src="images/img_contrast.svg"
                            className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[95px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[4%]"
                            alt="contrast"
                          />
                          <Img
                            src="images/img_location.svg"
                            className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] ml-[1px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                            alt="location"
                          />
                        </Row>
                      </Column>
                      <Stack className="font-arial lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mb-[37px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[33%]">
                        <Button
                          className="absolute flex items-center justify-center w-[100%]"
                          shape="icbRoundedBorder39"
                          size="mdIcn"
                          variant="icbGradientAmber300Red900"
                        >
                          <Img
                            src="images/img_group3466.png"
                            className="flex items-center justify-center"
                            alt="Group3466"
                          />
                        </Button>
                        <Text className="absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 tracking-ls1 w-[max-content]">
                          L
                        </Text>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
                <Img
                  src="images/img_group3502.png"
                  className="absolute bottom-[5%] lg:h-[307px] xl:h-[351px] 2xl:h-[395px] 3xl:h-[474px] right-[0] w-[53%]"
                  alt="Group3502"
                />
              </Stack>
              <Stack className="lg:h-[344px] xl:h-[394px] 2xl:h-[443px] 3xl:h-[531px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[66%]">
                <Img
                  src="images/img_singlecoinfa.png"
                  className="absolute bottom-[0] lg:h-[153px] xl:h-[175px] 2xl:h-[197px] 3xl:h-[236px] right-[2%] w-[44%]"
                  alt="SinglecoinFa"
                />
                <Img
                  src="images/img_singlecoinfa_419X419.png"
                  className="absolute lg:h-[326px] xl:h-[373px] 2xl:h-[420px] 3xl:h-[504px] top-[0] lg:w-[325px] xl:w-[372px] 2xl:w-[419px] 3xl:w-[503px]"
                  alt="SinglecoinFa One"
                />
              </Stack>
            </Column>
          </Row>
        </Column>
        <Column className="font-arial items-center lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]">
          <Row className="bg-white_A700 justify-end lg:px-[140px] xl:px-[160px] 2xl:px-[180px] 3xl:px-[216px] w-[100%]">
            <Column
              className="bg-cover bg-repeat items-center justify-end xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[135px] lg:mt-[87px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] w-[29%]"
              style={{ backgroundImage: "url('images/img_group117.png')" }}
            >
              <Column
                className="bg-cover bg-repeat items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[98%]"
                style={{ backgroundImage: "url('images/img_group15.png')" }}
              >
                <Column className="bg-lime_100 items-center justify-end mb-[1px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] lg:p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius15 w-[99%]">
                  <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[159px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 tracking-ls1 w-[auto]">
                    reward screen
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="items-center lg:mb-[59px] xl:mb-[67px] 2xl:mb-[76px] 3xl:mb-[91px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[29%]">
              <Column
                className="bg-cover bg-repeat items-center lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group117.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat items-center justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[99%]"
                  style={{ backgroundImage: "url('images/img_group15.png')" }}
                >
                  <div className="bg-lime_100 3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] lg:mt-[107px] xl:mt-[122px] 2xl:mt-[138px] 3xl:mt-[165px] rounded-radius15 w-[99%]"></div>
                  <div className="bg-lime_100 3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] mb-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius15 w-[99%]"></div>
                </Column>
              </Column>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 tracking-ls1 w-[auto]">
                laptop, ipad
              </Text>
            </Column>
            <Column
              className="bg-cover bg-repeat font-avenir items-center justify-end lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:pt-[10px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:px-[10px] xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] w-[29%]"
              style={{ backgroundImage: "url('images/img_group117.png')" }}
            >
              <Column
                className="bg-cover bg-repeat justify-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[98%]"
                style={{ backgroundImage: "url('images/img_group15.png')" }}
              >
                <Text className="font-normal lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mr-[37px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                  financial literacy
                </Text>
                <div className="bg-lime_100 lg:h-[196px] xl:h-[225px] 2xl:h-[253px] 3xl:h-[303px] mb-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius15 w-[99%]"></div>
              </Column>
            </Column>
          </Row>
          <Stack className="bg-gray_300 font-manrope lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] lg:px-[31px] xl:px-[36px] 2xl:px-[41px] 3xl:px-[49px] w-[100%]">
            <Stack className="absolute lg:h-[136px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] inset-x-[0] mx-[auto] top-[0] w-[25%]">
              <Column className="absolute bottom-[29%] w-[100%]">
                <Img
                  src="images/img_vector27.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] w-[4%]"
                  alt="VectorTwentySeven One"
                />
                <Text className="font-semibold mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  students have signed up to learn with us{" "}
                </Text>
              </Column>
              <Row className="absolute bg-gradient2  font-questrial lg:h-[136px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] justify-end left-[25%] px-[1px] right-[27%] rounded-radius50 lg:w-[135px] xl:w-[154px] 2xl:w-[174px] 3xl:w-[208px]">
                <Stack className="lg:h-[102px] xl:h-[116px] 2xl:h-[131px] 3xl:h-[157px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[84%]">
                  <Column className="absolute h-[max-content] inset-y-[0] items-end my-[auto] right-[5%] w-[81%]">
                    <Img
                      src="images/img_contrast_9X7.svg"
                      className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] w-[6%]"
                      alt="contrast One"
                    />
                    <div className="bg-gradient2  xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[91px] mt-[2px] rounded-radius50 xl:w-[103px] 2xl:w-[116px] 3xl:w-[139px] lg:w-[90px]"></div>
                  </Column>
                  <Text className="absolute font-normal not-italic right-[0] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-gray_900 top-[18%] tracking-ls1 w-[auto]">
                    12,000
                  </Text>
                  <Img
                    src="images/img_lightbulb.svg"
                    className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] left-[0] top-[0] w-[10%]"
                    alt="lightbulb"
                  />
                </Stack>
                <Img
                  src="images/img_map_14X18.svg"
                  className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] ml-[2px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[10%]"
                  alt="map One"
                />
              </Row>
            </Stack>
            <Img
              src="images/img_location_16X15.svg"
              className="absolute lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] right-[41%] top-[21%] w-[1%]"
              alt="location One"
            />
            <Img
              src="images/img_music.svg"
              className="absolute lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] left-[40%] top-[9%] w-[1%]"
              alt="music"
            />
            <List
              className="absolute bottom-[3%] lg:gap-[11px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-3 inset-x-[0] min-h-[auto] mx-[auto] w-[68%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_901 items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius15 shadow-bs7 w-[100%]">
                <Text className="font-medium leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                  There is no funding limit for any institution. We can extend
                  loans for 10cr, 50cr, or even 1000cr provided the
                  parents/students apply from your school.
                </Text>
                <Text className="font-semibold leading-[119.60%] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_300 tracking-ls1 w-[41%]">
                  User Name & <br />
                  Course / education
                </Text>
              </Column>
              <Column className="bg-gray_901 items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius15 shadow-bs7 w-[100%]">
                <Text className="font-medium leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                  There is no funding limit for any institution. We can extend
                  loans for 10cr, 50cr, or even 1000cr provided the
                  parents/students apply from your school.
                </Text>
                <Text className="font-semibold leading-[119.60%] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_300 tracking-ls1 w-[41%]">
                  User Name & <br />
                  Course / education
                </Text>
              </Column>
              <Column className="bg-gray_901 items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius15 shadow-bs7 w-[100%]">
                <Text className="font-medium leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                  There is no funding limit for any institution. We can extend
                  loans for 10cr, 50cr, or even 1000cr provided the
                  parents/students apply from your school.
                </Text>
                <Text className="font-semibold leading-[119.60%] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_300 tracking-ls1 w-[41%]">
                  User Name & <br />
                  Course / education
                </Text>
              </Column>
            </List>
          </Stack>
        </Column>
        <Column className="font-manrope items-end lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] lg:pl-[182px] xl:pl-[209px] 2xl:pl-[235px] 3xl:pl-[282px] w-[100%]">
          <Row className="items-center justify-end w-[100%]">
            <Column className="w-[46%]">
              <Column className="lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[52%]">
                <Text className="font-normal font-questrial lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[96%]">
                  Unlock your true potential
                </Text>
                <Text className="font-manrope font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 tracking-ls1 w-[auto]">
                  With EDinfinity & LeoCoins
                </Text>
              </Column>
              <Row className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[67%]">
                <Img
                  src="images/img_group119.svg"
                  className="lg:h-[46px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] w-[1%]"
                  alt="Group3670"
                />
                <Column className="bg-white_A700 lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius12 shadow-bs5 w-[93%]">
                  <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] ml-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[81%]">
                    Specially curated courses for students & professionals
                  </Text>
                </Column>
              </Row>
              <Row className="bg-gray_900 font-questrial items-center justify-end lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[60%]">
                <Text className="font-normal my-[2px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                  Know more
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[119px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[13%]"
                  alt="arrowright Two"
                />
              </Row>
            </Column>
            <Stack className="lg:h-[366px] xl:h-[419px] 2xl:h-[471px] 3xl:h-[565px] w-[54%]">
              <div className="absolute bg-gray_300 lg:h-[186px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] inset-y-[0] left-[0] my-[auto] rounded-radius76 w-[23%]"></div>
              <Column
                className="absolute bg-cover bg-repeat items-center justify-end pl-[1px] py-[1px] right-[0] w-[87%]"
                style={{ backgroundImage: "url('images/img_group3693.png')" }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[353px] xl:h-[403px] 2xl:h-[454px] 3xl:h-[544px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group17.png')" }}
                >
                  <Img
                    src="images/img_ipadpro129.png"
                    className="absolute lg:h-[322px] xl:h-[369px] 2xl:h-[415px] 3xl:h-[498px] inset-[0] justify-center m-[auto] w-[97%]"
                    alt="iPadPro129"
                  />
                </Stack>
              </Column>
            </Stack>
          </Row>
        </Column>
        <Column className="font-manrope items-center lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[100%]">
          <Stack className="3xl:h-[1081px] lg:h-[700px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
            <Stack className="absolute 3xl:h-[1081px] lg:h-[700px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
              <Stack className="absolute 3xl:h-[1081px] lg:h-[700px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
                <Column className="absolute bg-gray_300 justify-center lg:p-[182px] xl:p-[208px] 2xl:p-[234px] 3xl:p-[280px] w-[100%]">
                  <Column className="items-center lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[42%]">
                    <Text className="font-normal font-questrial lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[99%]">
                      Embark Towards Financial Independence
                    </Text>
                    <Text className="font-manrope font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 tracking-ls1 w-[auto]">
                      With Our Stylish Prepaid Smart Cards
                    </Text>
                  </Column>
                  <Row className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[38%]">
                    <Img
                      src="images/img_group119.svg"
                      className="lg:h-[46px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] w-[1%]"
                      alt="Group3697"
                    />
                    <Column className="bg-gray_300 lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius12 shadow-bs5 w-[93%]">
                      <Text className="font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] ml-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[89%]">
                        Hassle free payments with timely transaction tracking
                      </Text>
                    </Column>
                  </Row>
                  <Row className="bg-gray_900 font-questrial items-center justify-end lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[34%]">
                    <Text className="font-normal my-[2px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                      Know more
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[119px] xl:ml-[136px] 2xl:ml-[153px] 3xl:ml-[183px] w-[13%]"
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_group3495.png"
                  className="absolute bottom-[0] lg:h-[538px] xl:h-[615px] 2xl:h-[692px] 3xl:h-[830px] right-[0] w-[34%]"
                  alt="Group3495"
                />
              </Stack>
              <Column
                className="absolute bg-cover bg-repeat bottom-[18%] items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] right-[14%] shadow-bs6 w-[18%]"
                style={{ backgroundImage: "url('images/img_group117.png')" }}
              >
                <Column
                  className="bg-cover bg-repeat items-center justify-end mb-[1px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius31 w-[98%]"
                  style={{ backgroundImage: "url('images/img_group15.png')" }}
                >
                  <Button
                    className="font-semibold lg:mt-[327px] xl:mt-[374px] 2xl:mt-[421px] 3xl:mt-[505px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center tracking-ls1 w-[92%]"
                    shape="CircleBorder25"
                    variant="FillTeal50"
                  >
                    Track transactions
                  </Button>
                </Column>
              </Column>
            </Stack>
            <Column className="absolute right-[12%] top-[26%] w-[26%]">
              <Row className="bg-teal_50 items-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius25 w-[44%]">
                <Column className="bg-gradient1  lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] items-center lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius50 lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]">
                  <Img
                    src="images/img_star2.svg"
                    className="bg-gradient1  lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[2px] rounded-radius1 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="StarTwo"
                  />
                </Column>
                <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 tracking-ls1 w-[auto]">
                  Earn rewards
                </Text>
              </Row>
              <Stack
                className="bg-cover bg-repeat lg:h-[256px] xl:h-[292px] 2xl:h-[329px] 3xl:h-[394px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:px-[38px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] w-[70%]"
                style={{ backgroundImage: "url('images/img_group3511.png')" }}
              >
                <Img
                  src="images/img_financepeerlog_36X110.png"
                  className="absolute lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] left-[0] top-[25%] w-[42%]"
                  alt="FinancepeerLog One"
                />
              </Stack>
            </Column>
          </Stack>
          <Row className="font-questrial items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[80%]">
            <Column className="w-[71%]">
              <Text className="font-normal font-questrial not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[auto]">
                Questions are Key
              </Text>
              <Text className="font-manrope font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 tracking-ls1 w-[auto]">
                Check out detailed list of answers on our FAQ page
              </Text>
            </Column>
            <Row className="bg-gray_900 items-center justify-between lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[29%]">
              <Text className="font-normal ml-[4px] my-[1px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                Explore FAQs
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[13%]"
                alt="arrowright Four"
              />
            </Row>
          </Row>
          <footer className="bg-black_900 font-manrope lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Column className="3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[100%]">
              <Row className="xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] w-[75%]">
                <Img
                  src="images/img_financepeerlog_36X110.png"
                  className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[13%]"
                  alt="FinancepeerLog Two"
                />
                <Text className="font-bold lg:ml-[224px] xl:ml-[257px] 2xl:ml-[289px] 3xl:ml-[347px] mt-[1px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-lime_100 tracking-ls1 w-[auto]">
                  Products{" "}
                </Text>
                <Text className="font-bold 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] mt-[2px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-lime_100 tracking-ls1 w-[auto]">
                  Company
                </Text>
                <Text className="font-bold lg:ml-[147px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-lime_100 tracking-ls1 w-[auto]">
                  Connect with us
                </Text>
              </Row>
              <Row className="items-end xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[98px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[84%]">
                <Img
                  src="images/img_group3505.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] mb-[3px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] w-[10%]"
                  alt="Group3505"
                />
                <Column className="lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[356px] mt-[1px] w-[9%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    Fee Payment
                  </Text>
                  <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    UVA card
                  </Text>
                  <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    Edinfinity
                  </Text>
                  <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    Digital Campuses
                  </Text>
                </Column>
                <Column className="3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] my-[1px] w-[17%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    About us
                  </Text>
                  <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    Talk to us
                  </Text>
                  <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    FAQs
                  </Text>
                  <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                    Terms and Conditions
                  </Text>
                </Column>
                <Column className="lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] w-[25%]">
                  <Row className="items-center ml-[2px] w-[43%]">
                    <Img
                      src="images/img_call.svg"
                      className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[8%]"
                      alt="call"
                    />
                    <Text className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                      +91 9554123123
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[68%]">
                    <Img
                      src="images/img_mail.svg"
                      className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] w-[7%]"
                      alt="mail"
                    />
                    <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[auto]">
                      connect@financepeer.com
                    </Text>
                  </Row>
                  <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Img
                      src="images/img_shape.svg"
                      className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[1px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
                      alt="Shape"
                    />
                    <Text className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[19px] 3xl:leading-[22px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-lime_100 tracking-ls1 w-[89%]">
                      Financepeer HO, Plot No. 169, RSC II S.N. 120, <br />
                      Versova, Andheri (W) Mumbai - 400053
                    </Text>
                  </Row>
                </Column>
              </Row>
              <Button
                className="font-normal lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[100%]"
                size="lg"
                variant="FillGray902"
              >
                © 2022 Gajju Technologies Private Limited, All rights reserved.
              </Button>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default HomepagelatestiterationPage;
