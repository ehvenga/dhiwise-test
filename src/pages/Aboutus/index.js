import React from "react";

import { Column, Row, Img, Text, Button, Stack, List } from "components";

const AboutusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-questrial mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-black_900 items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius5 shadow-bs4 w-[100%]">
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
                className="font-normal font-questrial lg:ml-[427px] xl:ml-[489px] 2xl:ml-[550px] 3xl:ml-[660px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[11%]"
                shape="RoundedBorder5"
                variant="FillLime100"
              >
                Login
              </Button>
            </Row>
          </header>
        </Column>
        <Stack className="lg:h-[124px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] lg:ml-[340px] xl:ml-[389px] 2xl:ml-[438px] 3xl:ml-[525px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[31%]">
          <Img
            src="images/img_singlecoinfa_419X419.png"
            className="absolute lg:h-[109px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] left-[0] top-[0] lg:w-[108px] xl:w-[124px] 2xl:w-[140px] 3xl:w-[168px]"
            alt="SinglecoinFa"
          />
          <Text className="absolute bottom-[0] font-normal not-italic right-[0] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_903 tracking-ls1 w-[auto]">
            We believe in quality education for all
          </Text>
        </Stack>
        <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
          <Stack className="lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] w-[45%]">
            <Stack className="absolute lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] w-[100%]">
              <Row className="absolute right-[0] w-[94%]">
                <Img
                  src="images/img_group3673.png"
                  className="lg:h-[112px] xl:h-[128px] 2xl:h-[144px] 3xl:h-[172px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:w-[111px] xl:w-[127px] 2xl:w-[143px] 3xl:w-[171px]"
                  alt="Group3673"
                />
                <Stack className="lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[36%]">
                  <Column
                    className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] items-center mx-[auto] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] w-[92%]"
                    style={{
                      backgroundImage: "url('images/img_group117.png')",
                    }}
                  >
                    <Column
                      className="bg-cover bg-repeat items-center justify-end mb-[1px] p-[3px] w-[98%]"
                      style={{
                        backgroundImage: "url('images/img_group30.png')",
                      }}
                    >
                      <div className="bg-white_A700 lg:h-[267px] xl:h-[306px] 2xl:h-[344px] 3xl:h-[412px] lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]"></div>
                    </Column>
                  </Column>
                  <Stack className="absolute bg-gradient3  lg:h-[342px] xl:h-[391px] 2xl:h-[440px] 3xl:h-[528px] lg:px-[36px] xl:px-[41px] 2xl:px-[47px] 3xl:px-[56px] w-[100%]">
                    <Img
                      src="images/img_financepeerlog_36X110.png"
                      className="absolute lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] inset-x-[0] mx-[auto] top-[9%] w-[57%]"
                      alt="FinancepeerLog One"
                    />
                  </Stack>
                </Stack>
                <Img
                  src="images/img_group3672.png"
                  className="lg:h-[140px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[215px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] lg:w-[139px] xl:w-[159px] 2xl:w-[179px] 3xl:w-[214px]"
                  alt="Group3672"
                />
              </Row>
              <Column className="absolute bottom-[16%] inset-x-[0] mx-[auto] w-[51%]">
                <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] lg:ml-[151px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] w-[32%]">
                  <Img
                    src="images/img_group3664.png"
                    className="absolute 3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] inset-x-[18%] w-[63%]"
                    alt="Group3664"
                  />
                  <Img
                    src="images/img_star7.svg"
                    className="absolute bottom-[12%] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[0] rounded-radius1 lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="StarSeven"
                  />
                  <Img
                    src="images/img_star8.svg"
                    className="absolute lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] right-[0] rounded-radius1 top-[1%] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="StarEight"
                  />
                </Stack>
                <Row className="bg-gray_900 items-center justify-between lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[100%]">
                  <Text className="font-normal ml-[4px] my-[2px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                    Connect
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[13%]"
                    alt="arrowright"
                  />
                </Row>
              </Column>
              <div className="absolute bg-lime_100_87 lg:h-[37px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] left-[0] rounded-radius235 top-[34%] w-[7%]"></div>
            </Stack>
            <Img
              src="images/img_vector654.svg"
              className="absolute bottom-[13%] lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] right-[44%] w-[4%]"
              alt="Vector654"
            />
          </Stack>
          <Img
            src="images/img_priscilladupr.png"
            className="lg:h-[343px] xl:h-[392px] 2xl:h-[441px] 3xl:h-[529px] 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] w-[100%]"
            alt="priscilladupr"
          />
          <Row className="bg-gray_300 font-manrope xl:p-[108px] 2xl:p-[122px] 3xl:p-[146px] lg:p-[94px] w-[100%]">
            <div className="bg-white_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius45 w-[1%]"></div>
            <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[56%]">
              <Text className="font-normal not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-gray_900 tracking-ls1 w-[auto]">
                Mission
              </Text>
              <Text className="font-normal lg:leading-[24px] xl:leading-[27px] 2xl:leading-[31px] 3xl:leading-[37px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[68%]">
                Financepeer is a unique platform that is designed to help make
                quality education available to all. We also help institutes meet
                their financial obligations and continue to focus on making
                impact in the society.
              </Text>
            </Column>
            <div className="bg-white_A700 lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius45 w-[1%]"></div>
            <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[31%]">
              <Text className="font-normal not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-gray_900 tracking-ls1 w-[auto]">
                Vision
              </Text>
              <Text className="font-normal lg:leading-[24px] xl:leading-[27px] 2xl:leading-[31px] 3xl:leading-[37px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 tracking-ls1 w-[100%]">
                Financepeer is a for profit-impact solution company founded by
                IIT/IIM alumni.  We are focused to make quality education
                available to all.
              </Text>
            </Column>
          </Row>
          <Text className="font-normal lg:mt-[112px] xl:mt-[128px] 2xl:mt-[145px] 3xl:mt-[174px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
            Our Team
          </Text>
          <Row className="font-manrope items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[80%]">
            <Column className="w-[26%]">
              <Img
                src="images/img_image56.png"
                className="lg:h-[250px] xl:h-[286px] 2xl:h-[322px] 3xl:h-[386px] rounded-radius10 w-[87%]"
                alt="imageFiftySix"
              />
              <Row className="lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[87%]">
                <Column className="mt-[1px] w-[83%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[auto]">
                    John Deo
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                    Head of Design
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  size="mdIcn"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                    alt="Vector"
                  />
                </Button>
              </Row>
            </Column>
            <Column className="w-[26%]">
              <Stack className="lg:h-[270px] xl:h-[308px] 2xl:h-[347px] 3xl:h-[416px] w-[87%]">
                <Stack className="absolute lg:h-[250px] xl:h-[286px] 2xl:h-[322px] 3xl:h-[386px] top-[0] w-[100%]">
                  <Stack
                    className="absolute bg-cover bg-repeat bottom-[1%] lg:h-[248px] xl:h-[283px] 2xl:h-[319px] 3xl:h-[382px] rounded-radius10 w-[100%]"
                    style={{ backgroundImage: "url('images/img_group31.png')" }}
                  >
                    <Img
                      src="images/img_group31.png"
                      className="absolute lg:h-[248px] xl:h-[283px] 2xl:h-[319px] 3xl:h-[382px] rounded-radius10 w-[100%]"
                      alt="imageSixtyTwo"
                    />
                  </Stack>
                  <Column className="absolute bg-gray_800 items-center justify-end lg:p-[31px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] rounded-radius10 w-[100%]">
                    <Text className="font-normal leading-[normal] lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[98%]">
                      We also help institutes meet their financial obligations
                      and continue to focus on making impact in the society.
                    </Text>
                  </Column>
                </Stack>
                <Img
                  src="images/img_vector654.svg"
                  className="absolute bottom-[0] lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] right-[33%] w-[9%]"
                  alt="Vector727"
                />
              </Stack>
              <Row className="w-[87%]">
                <Column className="mt-[1px] w-[83%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[auto]">
                    John Deo
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                    Head of Design
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                  size="mdIcn"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                    alt="Vector One"
                  />
                </Button>
              </Row>
            </Column>
            <List
              className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] w-[48%]"
              orientation="horizontal"
            >
              <Column className="items-center w-[100%]">
                <Img
                  src="images/img_image61.png"
                  className="lg:h-[250px] xl:h-[286px] 2xl:h-[322px] 3xl:h-[386px] rounded-radius10 w-[100%]"
                  alt="imageSixtyOne"
                />
                <Row className="justify-evenly lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Column className="mt-[1px] w-[83%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[auto]">
                      John Deo
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                      Head of Design
                    </Text>
                  </Column>
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                      alt="Vector Two"
                    />
                  </Button>
                </Row>
              </Column>
              <Column className="items-center w-[100%]">
                <Img
                  src="images/img_group31.png"
                  className="lg:h-[250px] xl:h-[286px] 2xl:h-[322px] 3xl:h-[386px] rounded-radius10 w-[100%]"
                  alt="imageSixty"
                />
                <Row className="justify-evenly lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Column className="mt-[1px] w-[83%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[auto]">
                      John Deo
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                      Head of Design
                    </Text>
                  </Column>
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center rounded-radius50 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    size="mdIcn"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                      alt="Vector Three"
                    />
                  </Button>
                </Row>
              </Column>
            </List>
          </Row>
          <Column className="bg-black_900_63 items-center justify-end lg:mt-[191px] xl:mt-[218px] 2xl:mt-[246px] 3xl:mt-[295px] lg:p-[203px] xl:p-[232px] 2xl:p-[261px] 3xl:p-[313px] w-[100%]">
            <Stack className="bg-gray_901 lg:h-[116px] xl:h-[133px] 2xl:h-[150px] 3xl:h-[179px] mt-[1px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] w-[31%]">
              <Img
                src="images/img_play.svg"
                className="absolute lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] inset-[0] justify-center m-[auto] lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                alt="play"
              />
            </Stack>
          </Column>
          <Row className="bg-gray_300 font-questrial items-center lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
            <Text className="font-normal lg:leading-[35px] xl:leading-[40px] 2xl:leading-[46px] 3xl:leading-[55px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-gray_903 tracking-ls1 w-[19%]">
              Financepeer has reached
            </Text>
            <Row className="font-manrope items-end justify-center lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[161px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[249px] w-[7%]">
              <div className="bg-white_A700 lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] rounded-radius35 w-[8%]"></div>
              <Column className="items-center mb-[2px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[72%]">
                <Text className="font-semibold lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-black_900 tracking-ls1 w-[auto]">
                  60+
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                  Cities
                </Text>
              </Column>
            </Row>
            <List
              className="font-manrope 2xl:gap-[100px] 3xl:gap-[120px] lg:gap-[77px] xl:gap-[88px] grid grid-cols-2 lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] min-h-[auto] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] w-[33%]"
              orientation="horizontal"
            >
              <Row className="items-end justify-between w-[100%]">
                <div className="bg-white_A700 lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] rounded-radius35 w-[5%]"></div>
                <Column className="mb-[2px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[79%]">
                  <Text className="font-semibold lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-black_900 tracking-ls1 w-[auto]">
                    6,000+
                  </Text>
                  <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                    Institutes
                  </Text>
                </Column>
              </Row>
              <Row className="items-end justify-between w-[100%]">
                <div className="bg-white_A700 lg:h-[63px] xl:h-[73px] 2xl:h-[82px] 3xl:h-[98px] rounded-radius35 w-[4%]"></div>
                <Column className="mb-[2px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[84%]">
                  <Text className="font-semibold lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-black_900 tracking-ls1 w-[auto]">
                    22,00,00+
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                    Students
                  </Text>
                </Column>
              </Row>
            </List>
          </Row>
          <Row className="font-manrope lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] w-[83%]">
            <Column className="lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[43%]">
              <Column className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[62%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-gray_900 tracking-ls1 w-[76%]">
                  Our Presence is  Our Relevance
                </Text>
                <Text className="font-normal lg:leading-[24px] xl:leading-[27px] 2xl:leading-[31px] 3xl:leading-[37px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 tracking-ls1 w-[100%]">
                  Mumbai-based Financepeer (estd. 2017) is a Forbes listed and
                  Google incubated School (K-12) fee financing company
                   for-Profit Impact Creation venture.
                  <br />
                  Financepeer is a unique platform  that is designed to help
                  make quality education available to all.{" "}
                </Text>
              </Column>
              <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[73%]">
                <Column className="absolute bg-gray_300 bottom-[11%] justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] right-[0] rounded-radius10 w-[89%]">
                  <Text className="font-semibold leading-[normal] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 text-center tracking-ls1 w-[53%]">
                    Recognized by  Forbes & Google
                  </Text>
                </Column>
                <Img
                  src="images/img_image.png"
                  className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] left-[0] w-[25%]"
                  alt="image Five"
                />
              </Stack>
            </Column>
            <List
              className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] min-h-[auto] w-[57%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[383px] xl:h-[438px] 2xl:h-[493px] 3xl:h-[591px] mt-[2px] w-[100%]">
                <Column className="absolute bg-teal_52 bottom-[0] justify-end lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                  <Text className="font-normal lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_904 tracking-ls1 w-[91%]">
                    “Financepeer is a Fintech company that facilitates personal
                    loans to parents to help them pay their children's school
                    fees in easy monthly installments.”
                  </Text>
                  <Row className="items-center lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] mr-[auto] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[52%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Read more
                    </Text>
                    <Img
                      src="images/img_vector725.svg"
                      className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[32%]"
                      alt="Vector725"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle1408.png"
                  className="absolute lg:h-[200px] xl:h-[228px] 2xl:h-[257px] 3xl:h-[308px] rounded-radius10 top-[0] w-[100%]"
                  alt="Rectangle1408"
                />
              </Stack>
              <Stack className="lg:h-[385px] xl:h-[440px] 2xl:h-[495px] 3xl:h-[594px] w-[100%]">
                <Column className="absolute bg-teal_52 bottom-[0] justify-end lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                  <Text className="font-normal lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[118px] xl:mt-[135px] 2xl:mt-[152px] 3xl:mt-[182px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_904 tracking-ls1 w-[91%]">
                    “Financepeer is a Fintech company that facilitates personal
                    loans to parents to help them pay their children's school
                    fees in easy monthly installments.”
                  </Text>
                  <Row className="items-center lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] mr-[auto] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[52%]">
                    <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Read more
                    </Text>
                    <Img
                      src="images/img_vector725.svg"
                      className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[32%]"
                      alt="Vector726"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle1410.png"
                  className="absolute lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] rounded-radius10 top-[0] w-[100%]"
                  alt="Rectangle1410"
                />
              </Stack>
            </List>
          </Row>
          <Stack className="font-questrial 3xl:h-[1086px] lg:h-[704px] xl:h-[805px] 2xl:h-[905px] lg:mt-[102px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] w-[100%]">
            <Column className="absolute bg-gray_300 items-center justify-end xl:p-[103px] 2xl:p-[116px] 3xl:p-[139px] lg:p-[90px] top-[0] w-[100%]">
              <Text className="font-normal mt-[4px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
                Our Wealth Partners
              </Text>
              <Column className="items-center lg:mt-[52px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[76%]">
                <Row className="items-end justify-between w-[100%]">
                  <Img
                    src="images/img_image34.png"
                    className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[13%]"
                    alt="imageThirtyFour"
                  />
                  <Img
                    src="images/img_image36.png"
                    className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] mt-[2px] w-[12%]"
                    alt="imageThirtySix"
                  />
                  <Img
                    src="images/img_image38.png"
                    className="lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] mb-[4px] w-[9%]"
                    alt="imageThirtyEight"
                  />
                  <Img
                    src="images/img_image39.png"
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[10%]"
                    alt="imageThirtyNine"
                  />
                  <Img
                    src="images/img_image40.png"
                    className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[10%]"
                    alt="imageForty"
                  />
                  <Img
                    src="images/img_image43.png"
                    className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[3px] w-[9%]"
                    alt="imageFortyThree"
                  />
                </Row>
                <Row className="items-end justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                  <Img
                    src="images/img_image35.png"
                    className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[13%]"
                    alt="imageThirtyFive"
                  />
                  <Img
                    src="images/img_image46.png"
                    className="lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[12%]"
                    alt="imageFortySix"
                  />
                  <Img
                    src="images/img_image37.png"
                    className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[6%]"
                    alt="imageThirtySeven"
                  />
                  <Img
                    src="images/img_image42.png"
                    className="lg:h-[46px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[45px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[70px]"
                    alt="imageFortyTwo"
                  />
                  <Img
                    src="images/img_image41.png"
                    className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[9%]"
                    alt="imageFortyOne"
                  />
                  <Img
                    src="images/img_image45.png"
                    className="lg:h-[53px] xl:h-[60px] 2xl:h-[68px] 3xl:h-[81px] w-[7%]"
                    alt="imageFortyFive"
                  />
                </Row>
              </Column>
            </Column>
            <footer className="absolute bg-black_900 bottom-[0] font-manrope w-[100%]">
              <Column className="w-[100%]">
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
                  © 2022 Gajju Technologies Private Limited, All rights
                  reserved.
                </Button>
              </Column>
            </footer>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AboutusPage;
