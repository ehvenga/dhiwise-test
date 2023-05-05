import React from "react";

import { Column, Row, Img, Text, Button, Stack, Line, Input } from "components";

const EdmojoPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-questrial items-center justify-end mx-[auto] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
        <header className="w-[97%]">
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
              className="font-normal font-questrial lg:ml-[427px] xl:ml-[489px] 2xl:ml-[550px] 3xl:ml-[660px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[11%]"
              shape="RoundedBorder5"
              variant="FillLime100"
            >
              Login
            </Button>
          </Row>
        </header>
        <Column className="items-end lg:mt-[104px] xl:mt-[119px] 2xl:mt-[134px] 3xl:mt-[160px] 3xl:pl-[116px] lg:pl-[75px] xl:pl-[86px] 2xl:pl-[97px] w-[100%]">
          <Stack className="lg:h-[420px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[648px] w-[100%]">
            <Stack className="absolute font-questrial lg:h-[420px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[648px] w-[100%]">
              <Stack className="absolute bottom-[2%] lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] w-[100%]">
                <Stack className="absolute lg:h-[119px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] left-[0] top-[0] w-[40%]">
                  <Img
                    src="images/img_vector_62X75.png"
                    className="absolute lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] left-[0] rounded-radius1 top-[0] w-[14%]"
                    alt="Vector"
                  />
                  <Text className="absolute bottom-[0] font-normal lg:leading-[49px] xl:leading-[56px] 2xl:leading-[64px] 3xl:leading-[76px] not-italic right-[0] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[91%]">
                    Streamline Online Classroom Integration with Edmojo
                  </Text>
                </Stack>
                <Column className="absolute bottom-[0] font-manrope left-[3%] w-[25%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    Your name
                  </Text>
                  <Line className="bg-black_900 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]" />
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] lg:mt-[26px] w-[100%] xl:mt-[30px]"
                    type="number"
                    name="Group105"
                    placeholder="Your number"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[31px] 3xl:mt-[37px] lg:mt-[24px] w-[100%] xl:mt-[27px]"
                    type="email"
                    name="Group103"
                    placeholder="Email ID"
                    size="sm"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] lg:mt-[26px] w-[100%] xl:mt-[30px]"
                    type="text"
                    name="Group107"
                    placeholder="Institute name"
                    size="sm"
                  ></Input>
                  <Row className="bg-gray_301 font-questrial items-center justify-between lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius985 w-[100%]">
                    <Text className="font-normal mb-[1px] ml-[2px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_901 tracking-ls1 w-[auto]">
                      Book a demo
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[14%]"
                      alt="arrowright"
                    />
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle1377.png"
                  className="absolute lg:h-[237px] xl:h-[271px] 2xl:h-[305px] 3xl:h-[366px] right-[0] rounded-radius152 top-[3%] w-[36%]"
                  alt="Rectangle1377"
                />
              </Stack>
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] font-manrope lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] right-[8%] w-[57%]"
                style={{ backgroundImage: "url('images/img_group3710.png')" }}
              >
                <Stack
                  className="bg-cover bg-repeat lg:h-[324px] xl:h-[371px] 2xl:h-[417px] 3xl:h-[500px] ml-[3px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[93%]"
                  style={{ backgroundImage: "url('images/img_group76.png')" }}
                >
                  <Img
                    src="images/img_rectangle1485.svg"
                    className="absolute lg:h-[253px] xl:h-[290px] 2xl:h-[326px] 3xl:h-[391px] right-[0] rounded-radius7 top-[1%] w-[65%]"
                    alt="Rectangle1485"
                  />
                  <Button
                    className="2xl:ml-[56px] 2xl:mt-[46px] 3xl:ml-[67px] 3xl:mt-[55px] absolute flex items-center justify-center left-[8%] lg:ml-[43px] lg:mt-[35px] text-center top-[11%] w-[32%] xl:ml-[49px] xl:mt-[40px]"
                    leftIcon={
                      <Img
                        src="images/img_group3724.png"
                        className="text-center right-[2%] absolute lg:w-[15px] lg:mr-[9px] xl:w-[17px] xl:mr-[10px] 2xl:w-[20px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:mr-[14px]"
                        alt="Group 3533"
                      />
                    }
                    shape="RoundedBorder8"
                    variant="OutlineBlack90014"
                  >
                    <div className="bg-transparent font-normal left-[0] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] top-[0] tracking-ls1">
                      Make your campus digital
                    </div>
                  </Button>
                </Stack>
              </Column>
            </Stack>
            <Button
              className="2xl:mb-[162px] 2xl:mr-[74px] 3xl:mb-[194px] 3xl:mr-[88px] absolute bottom-[30%] flex items-center justify-center lg:mb-[126px] lg:mr-[57px] right-[6%] text-center w-[16%] xl:mb-[144px] xl:mr-[65px]"
              leftIcon={
                <Img
                  src="images/img_group3724.png"
                  className="text-center right-[1%] absolute lg:w-[15px] lg:mr-[9px] xl:w-[17px] xl:mr-[10px] 2xl:w-[20px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:mr-[14px]"
                  alt="Group 3605"
                />
              }
              shape="RoundedBorder8"
              variant="OutlineBlack90014"
            >
              <div className="bg-transparent bottom-[0] font-manrope font-normal not-italic right-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] tracking-ls1">
                Make your campus digital
              </div>
            </Button>
          </Stack>
        </Column>
        <Column className="lg:mt-[194px] xl:mt-[222px] 2xl:mt-[250px] 3xl:mt-[300px] lg:px-[113px] xl:px-[129px] 2xl:px-[146px] 3xl:px-[175px] w-[100%]">
          <Text className="font-normal not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
            Bloom's Taxonomy and New Education Policy
          </Text>
        </Column>
        <Column className="items-center lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
          <Column className="bg-white_A700 font-manrope lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] shadow-bs11 w-[100%]">
            <Row className="items-center lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] w-[42%]">
              <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Bloom's Taxonomy
              </Text>
              <Text className="font-semibold lg:ml-[141px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_500 tracking-ls1 w-[auto]">
                New Education Policy
              </Text>
            </Row>
            <div
              className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] overflow-hidden relative w-[52%]"
              name="GroupSeventy"
            >
              <div className="w-full h-full absolute bg-teal_52 rounded-[5.5px]"></div>
              <div
                className="h-full absolute bg-teal_101  rounded-[5.5px]"
                style={{ width: "48%" }}
              ></div>
            </div>
            <Row className="lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] lg:ml-[61px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[94px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[87%]">
              <Column className="mt-[2px] w-[21%]">
                <Img
                  src="images/img_skill3.png"
                  className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px]"
                  alt="skillThree"
                />
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[77%]">
                  Map topics and objectives to cognition as per Bloom's Taxonomy
                </Text>
              </Column>
              <Column className="mt-[3px] w-[21%]">
                <Img
                  src="images/img_skill2.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  alt="skillTwo"
                />
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[47%]">
                  Enhancement of  students' attitude
                </Text>
              </Column>
              <Column className="mt-[1px] w-[21%]">
                <Img
                  src="images/img_skill9.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  alt="skillNine"
                />
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[49%]">
                  Define flexible  attainment targets
                </Text>
              </Column>
              <Column className="w-[21%]">
                <Img
                  src="images/img_skill1.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  alt="skillOne"
                />
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[73%]">
                  Development of cognition,  mental skills and knowledge
                </Text>
              </Column>
              <Column className="mt-[3px] w-[18%]">
                <Img
                  src="images/img_skill4.png"
                  className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                  alt="skillFour"
                />
                <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[100%]">
                  Manage and map teaching types with cognition and objectives
                </Text>
              </Column>
            </Row>
          </Column>
          <Row className="font-manrope items-center justify-evenly w-[100%]">
            <Column className="bg-gray_50 items-center 3xl:p-[118px] lg:p-[77px] xl:p-[88px] 2xl:p-[99px] w-[51%]">
              <Text className="font-normal font-questrial lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[83%]">
                Best performance evaluation tools for students, just a click
                away
              </Text>
              <Text className="font-manrope font-normal leading-[128.10%] lg:mb-[198px] xl:mb-[226px] 2xl:mb-[255px] 3xl:mb-[306px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 tracking-ls1 w-[81%]">
                Create Course Outcomes, Assessments, and Course Attainment
                computations swiftly
              </Text>
            </Column>
            <Row className="bg-light_green_51 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[49%]">
              <Img
                src="images/img_group3711_lime_900.svg"
                className="lg:h-[367px] xl:h-[419px] 2xl:h-[472px] 3xl:h-[566px] 3xl:mb-[115px] lg:mb-[74px] xl:mb-[85px] 2xl:mb-[96px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[4%]"
                alt="Group3711"
              />
              <Column className="lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[52%]">
                <Text className="font-semibold ml-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                  Inbuilt Assessment Tools
                </Text>
                <Text className="font-light leading-[128.10%] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[100%]">
                  Create in-depth rubrics for student assessments per Course
                  Outcome
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  Printable Course Files
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  Performance Mapping
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  Intelligence Analysis
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  Learning Management System
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  External & Internal Surveys
                </Text>
                <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                  Multiple Project Collaboration
                </Text>
              </Column>
            </Row>
          </Row>
          <Text className="font-normal font-questrial lg:mt-[115px] xl:mt-[132px] 2xl:mt-[149px] 3xl:mt-[178px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
            Enroll Today !
          </Text>
          <Row className="font-manrope items-center justify-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[31%]">
            <Input
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              type="text"
              name="Group111"
              placeholder="Your name"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] lg:ml-[15px] w-[48%] xl:ml-[17px]"
              type="number"
              name="Group117"
              placeholder="Your number"
            ></Input>
          </Row>
          <Row className="font-manrope items-center justify-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[31%]">
            <Input
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="w-[48%]"
              type="email"
              name="Group113"
              placeholder="Email ID"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
              wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] lg:ml-[15px] w-[48%] xl:ml-[17px]"
              type="text"
              name="Group115"
              placeholder="Institute name"
            ></Input>
          </Row>
          <Row className="bg-gray_900 font-questrial items-center justify-center lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius985 w-[31%]">
            <Text className="font-normal mb-[1px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
              Enroll now
            </Text>
            <Img
              src="images/img_arrowright_17X54.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[188px] xl:ml-[215px] 2xl:ml-[242px] 3xl:ml-[290px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] w-[13%]"
              alt="arrowright One"
            />
          </Row>
          <footer className="bg-black_900 font-manrope lg:mt-[111px] xl:mt-[127px] 2xl:mt-[143px] 3xl:mt-[171px] w-[100%]">
            <Column className="3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[100%]">
              <Row className="xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] w-[75%]">
                <Img
                  src="images/img_financepeerlog_36X110.png"
                  className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[13%]"
                  alt="FinancepeerLog One"
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

export default EdmojoPage;
