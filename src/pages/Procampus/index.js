import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Line,
  Input,
  List,
} from "components";

const ProcampusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-questrial items-center mx-[auto] w-[100%]">
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
        <Stack className="lg:h-[389px] xl:h-[444px] 2xl:h-[500px] 3xl:h-[600px] lg:mt-[126px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[195px] w-[80%]">
          <Stack className="absolute lg:h-[389px] xl:h-[444px] 2xl:h-[500px] 3xl:h-[600px] left-[5%] w-[59%]">
            <Img
              src="images/img_rectangle1375.svg"
              className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] right-[0] rounded-radius111 top-[0] w-[70%]"
              alt="Rectangle1377"
            />
            <Column
              className="absolute bg-cover bg-repeat bottom-[0] items-center left-[0] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] w-[71%]"
              style={{ backgroundImage: "url('images/img_group3685.png')" }}
            >
              <Stack
                className="bg-cover bg-repeat lg:h-[354px] xl:h-[404px] 2xl:h-[455px] 3xl:h-[546px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group63.png')" }}
              >
                <Stack className="absolute lg:h-[231px] xl:h-[265px] 2xl:h-[298px] 3xl:h-[357px] inset-x-[0] mx-[auto] top-[0] w-[92%]">
                  <Img
                    src="images/img_imacprolefts.png"
                    className="absolute lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] top-[1%] w-[100%]"
                    alt="iMacProLeftS"
                  />
                  <Img
                    src="images/img_imacprolefts_297X440.png"
                    className="absolute lg:h-[231px] xl:h-[265px] 2xl:h-[298px] 3xl:h-[357px] w-[100%]"
                    alt="iMacProLeftS One"
                  />
                </Stack>
                <Img
                  src="images/img_imacprolefts_1.png"
                  className="absolute lg:h-[231px] xl:h-[265px] 2xl:h-[298px] 3xl:h-[357px] inset-x-[0] mx-[auto] top-[0] w-[92%]"
                  alt="iMacProLeftS Two"
                />
              </Stack>
            </Column>
          </Stack>
          <Button
            className="2xl:mb-[114px] 2xl:ml-[367px] 3xl:mb-[136px] 3xl:ml-[440px] absolute bottom-[23%] flex items-center justify-center left-[32%] lg:mb-[88px] lg:ml-[285px] text-center w-[19%] xl:mb-[101px] xl:ml-[326px]"
            leftIcon={
              <Img
                src="images/img_group3724.png"
                className="text-center right-[1%] absolute lg:w-[15px] lg:mr-[9px] xl:w-[17px] xl:mr-[10px] 2xl:w-[20px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:mr-[14px]"
                alt="Group 3533"
              />
            }
            shape="RoundedBorder8"
            variant="OutlineBlack90014"
          >
            <div className="bg-transparent bottom-[0] font-manrope font-normal left-[0] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] tracking-ls1">
              Make your campus digital
            </div>
          </Button>
          <Button
            className="2xl:mt-[194px] 3xl:mt-[232px] absolute flex items-center justify-center lg:mt-[150px] text-center top-[39%] w-[17%] xl:mt-[172px]"
            leftIcon={
              <Img
                src="images/img_group3724.png"
                className="text-center right-[1%] absolute lg:w-[15px] lg:mr-[10px] xl:w-[17px] xl:mr-[11px] 2xl:w-[20px] 2xl:mr-[13px] 3xl:w-[24px] 3xl:mr-[15px]"
                alt="Group 3687"
              />
            }
            shape="RoundedBorder8"
            variant="OutlineBlack90014"
          >
            <div className="bg-transparent font-manrope font-normal left-[0] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] top-[0] tracking-ls1">
              Upgrade your system
            </div>
          </Button>
          <Text className="absolute font-normal font-questrial lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] not-italic right-[5%] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 top-[10%] tracking-ls1 w-[34%]">
            Build your Educational Brand with proCampuz
          </Text>
          <Text className="absolute font-manrope font-normal leading-[128.10%] not-italic right-[0] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 top-[34%] tracking-ls1 w-[39%]">
            A perfect solution made for learning, affiliating, and enhancing
            your institution’s network
          </Text>
          <Row className="absolute bg-black_900 bottom-[5%] font-questrial items-center justify-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] right-[10%] rounded-radius985 w-[29%]">
            <Text className="font-normal mb-[1px] ml-[2px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 tracking-ls1 w-[auto]">
              Book a demo
            </Text>
            <Img
              src="images/img_arrowright_17X40.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] w-[14%]"
              alt="arrowright"
            />
          </Row>
          <Column className="absolute bottom-[39%] font-manrope right-[10%] w-[29%]">
            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
              Your name
            </Text>
            <Line className="bg-black_900 h-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]" />
          </Column>
          <Input
            className="absolute bottom-[0] font-manrope font-normal not-italic p-[0] right-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:mb-[132px] 2xl:mr-[111px] 3xl:mb-[158px] 3xl:mr-[133px] absolute bottom-[26%] lg:mb-[102px] lg:mr-[86px] right-[10%] w-[29%] xl:mb-[117px] xl:mr-[98px]"
            type="number"
            name="GroupNinety"
            placeholder="Your number"
            size="sm"
          ></Input>
        </Stack>
        <Row className="bg-gray_300 font-manrope items-center justify-end lg:mt-[126px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[195px] 3xl:p-[109px] lg:p-[70px] xl:p-[80px] 2xl:p-[91px] w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center rounded-radius20 w-[26%]"
            style={{ backgroundImage: "url('images/img_group3708.svg')" }}
          >
            <Column
              className="bg-cover bg-repeat lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group64.png')" }}
            >
              <Button
                className="font-semibold lg:mb-[224px] xl:mb-[256px] 2xl:mb-[288px] 3xl:mb-[345px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[51%]"
                shape="RoundedBorder8"
                size="sm"
                variant="FillBlack900"
              >
                For K -12
              </Button>
            </Column>
            <Stack className="lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column
                className="absolute bg-cover bg-repeat bottom-[0] items-center justify-end lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius20 w-[100%]"
                style={{ backgroundImage: "url('images/img_group65.svg')" }}
              >
                <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[33px] mb-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[99%]">
                  Drive student success with K-12 platform with valuable insight
                  and engagement tools.
                </Text>
              </Column>
              <Text className="absolute font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] left-[6%] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 top-[0] tracking-ls1 w-[79%]">
                Academic Management system as comprehensive as your requirement.
                From Admission to Human Resource Management we got everything
                covered.
              </Text>
            </Stack>
          </Column>
          <Column
            className="bg-cover bg-repeat lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rounded-radius20 w-[26%]"
            style={{ backgroundImage: "url('images/img_group3708.svg')" }}
          >
            <Column
              className="bg-cover bg-repeat lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group66.png')" }}
            >
              <Button
                className="font-semibold lg:mb-[224px] xl:mb-[257px] 2xl:mb-[289px] 3xl:mb-[347px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-center tracking-ls1 w-[89%]"
                shape="RoundedBorder8"
                variant="FillBlack900"
              >
                For Universities
              </Button>
            </Column>
            <Text className="font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 tracking-ls1 w-[77%]">
              rich insights and data analytics that will help to accelerate your
              NIRF Ranking, NBA & NAAC Accreditation process in campus
            </Text>
            <Column
              className="bg-cover bg-repeat items-center justify-end lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius20 w-[100%]"
              style={{ backgroundImage: "url('images/img_group67.svg')" }}
            >
              <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[33px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[96%]">
                Turn data into actionable intelligence so your team can align
                towards strategic growth
              </Text>
            </Column>
          </Column>
          <Column className="lg:ml-[106px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] my-[2px] w-[30%]">
            <Img
              src="images/img_globalnetwork.png"
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
              alt="globalnetwork"
            />
            <Text className="font-normal font-questrial 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_901 tracking-ls1 w-[auto]">
              Connect
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[97%]">
              Automate and customize your communication  with all stakeholders
            </Text>
            <Img
              src="images/img_collaboration.png"
              className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] xl:mt-[101px] 2xl:mt-[114px] 3xl:mt-[136px] lg:mt-[88px] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
              alt="collaboration"
            />
            <Text className="font-normal font-questrial xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_901 tracking-ls1 w-[auto]">
              Collaborate
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[88%]">
              Share ideas, notes, videos, presentations, assignments, and
              lectures
            </Text>
            <Img
              src="images/img_star.png"
              className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[85px] xl:mt-[97px] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
              alt="star"
            />
            <Text className="font-normal font-questrial 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_901 tracking-ls1 w-[auto]">
              Perform
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[100%]">
              Increase efficiency in your campus by managing  and tracking daily
              activities
            </Text>
          </Column>
        </Row>
        <Row
          className="bg-cover bg-repeat font-manrope items-center justify-end pb-[4px] pl-[4px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group378.svg')" }}
        >
          <Column className="w-[33%]">
            <Text className="font-normal font-questrial lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[80%]">
              Best Tools to Make  your Campus Efficient and Secure
            </Text>
            <Text className="font-manrope font-normal leading-[128.10%] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 tracking-ls1 w-[92%]">
              Create Course Outcomes, Assessments, and Course Attainment
              computations swiftly
            </Text>
          </Column>
          <Row className="bg-light_green_51 items-center justify-end 3xl:p-[105px] lg:p-[68px] xl:p-[78px] 2xl:p-[88px] w-[58%]">
            <Img
              src="images/img_group3711.svg"
              className="lg:h-[469px] xl:h-[537px] 2xl:h-[604px] 3xl:h-[725px] lg:mb-[21px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[4%]"
              alt="Group3711"
            />
            <Column className="lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[78%]">
              <Text className="font-semibold ml-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                Make your Campus Cashless
              </Text>
              <Text className="font-light leading-[128.10%] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[67%]">
                Create in-depth rubrics for student assessments per Course
                Outcome
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Export data into Reports at your fingertip
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Keep your data centralized and secure via proCampuz
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Integrate Online Fees Collection with our platform
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                A complete customized HR Module for your Campus
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Access Online Educational Content
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Auto-sync your Time-Table, Events, Meetings, Tasks and More
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Access your Campus anywhere and anytime on any device
              </Text>
              <Text className="font-semibold ml-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 tracking-ls1 w-[auto]">
                Make your Campus Cashless
              </Text>
            </Column>
          </Row>
        </Row>
        <Column className="xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[92px] lg:px-[111px] xl:px-[127px] 2xl:px-[143px] 3xl:px-[171px] w-[100%]">
          <Text className="font-normal font-questrial ml-[1px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
            A Perfect Solution for Everyone!
          </Text>
          <Text className="font-manrope font-normal leading-[128.10%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 tracking-ls1 w-[38%]">
            Create Course Outcomes, Assessments, and Course Attainment
            computations swiftly
          </Text>
        </Column>
        <List
          className="lg:gap-[15px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-5 min-h-[auto] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[80%]"
          orientation="horizontal"
        >
          <Column className="bg-light_green_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
            <Row className="font-questrial items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-lime_900 tracking-ls1 w-[auto]">
                01
              </Text>
              <Line className="bg-lime_900 h-[2px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[33%]" />
            </Row>
            <Text className="font-normal font-questrial lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 tracking-ls1 w-[auto]">
              Principal
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[83%]">
              Plan your complete academic year
            </Text>
          </Column>
          <Column className="bg-light_green_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
            <Row className="font-questrial items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-lime_900 tracking-ls1 w-[auto]">
                02
              </Text>
              <Line className="bg-lime_900 h-[2px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[33%]" />
            </Row>
            <Text className="font-normal font-questrial lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 tracking-ls1 w-[auto]">
              HOD
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[88%]">
              Track Attendance of Your Students
            </Text>
          </Column>
          <Column className="bg-light_green_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
            <Row className="font-questrial items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-lime_900 tracking-ls1 w-[auto]">
                03
              </Text>
              <Line className="bg-lime_900 h-[2px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[33%]" />
            </Row>
            <Text className="font-normal font-questrial lg:leading-[28px] xl:leading-[32px] 2xl:leading-[36px] 3xl:leading-[43px] lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 tracking-ls1 w-[63%]">
              Placement Officer
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[88%]">
              Track Attendance of Your Students
            </Text>
          </Column>
          <Column className="bg-light_green_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
            <Row className="font-questrial items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-lime_900 tracking-ls1 w-[auto]">
                04
              </Text>
              <Line className="bg-lime_900 h-[2px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[33%]" />
            </Row>
            <Text className="font-normal font-questrial lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 tracking-ls1 w-[auto]">
              Faculty
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] 3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[97%]">
              Engage your Students like never before
            </Text>
          </Column>
          <Column className="bg-light_green_50 lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
            <Row className="font-questrial items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[89%]">
              <Text className="font-normal not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-lime_900 tracking-ls1 w-[auto]">
                05
              </Text>
              <Line className="bg-lime_900 h-[2px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[33%]" />
            </Row>
            <Text className="font-normal font-questrial lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_901 tracking-ls1 w-[auto]">
              Student
            </Text>
            <Text className="font-manrope font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[88%]">
              Dedicated Social Media for your Class
            </Text>
          </Column>
        </List>
        <Column className="bg-gray_300 font-questrial items-center xl:mt-[112px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] lg:pb-[19px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] w-[100%]">
          <Stack className="lg:h-[298px] xl:h-[340px] 2xl:h-[383px] 3xl:h-[459px] w-[100%]">
            <Column className="absolute bottom-[3%] items-center w-[100%]">
              <Text className="font-normal lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 text-center tracking-ls1 w-[43%]">
                Dedicated tools to help you perform better in every Department
              </Text>
              <Row className="font-manrope justify-between lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Column className="bg-light_green_50 items-center justify-end mt-[4px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs2 w-[15%]">
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 tracking-ls1 w-[54%]">
                    Admissions Management
                  </Text>
                </Column>
                <Text className="font-normal leading-[128.10%] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-black_900 text-center tracking-ls1 w-[32%]">
                  Improve Innovations, Relations and Operations in your Campus
                </Text>
                <Column className="bg-light_green_50 items-center justify-end mt-[4px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs2 w-[15%]">
                  <Text className="font-normal leading-[normal] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 tracking-ls1 w-[54%]">
                    Hostel  Management
                  </Text>
                </Column>
              </Row>
              <Row className="font-manrope items-center justify-between lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[83%]">
                <Column className="bg-light_green_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs2 w-[19%]">
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 tracking-ls1 w-[54%]">
                    Academics Management
                  </Text>
                </Column>
                <Column className="bg-light_green_50 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs2 w-[19%]">
                  <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 tracking-ls1 w-[54%]">
                    Stakeholder Management
                  </Text>
                </Column>
              </Row>
            </Column>
            <div className="absolute border-bw3 border-solid border-white_A700 lg:h-[298px] xl:h-[340px] 2xl:h-[383px] 3xl:h-[459px] inset-x-[12%] rounded-radius530 w-[76%]"></div>
          </Stack>
          <Row className="font-manrope justify-center 3xl:mb-[105px] lg:mb-[68px] xl:mb-[78px] 2xl:mb-[88px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[66%]">
            <Button
              className="font-normal lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[23%]"
              shape="RoundedBorder8"
              variant="OutlineBlack90016"
            >
              Feedback  Training{" "}
            </Button>
            <Button
              className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[23%]"
              shape="RoundedBorder8"
              variant="OutlineBlack90016"
            >
              Examination  Management
            </Button>
            <Button
              className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[23%]"
              shape="RoundedBorder8"
              variant="OutlineBlack90016"
            >
              Library  Administration
            </Button>
            <Column className="bg-light_green_50 items-center justify-end lg:mb-[42px] xl:mb-[48px] 2xl:mb-[54px] 3xl:mb-[64px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 shadow-bs2 w-[23%]">
              <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 tracking-ls1 w-[81%]">
                Finance & Accounts Management
              </Text>
            </Column>
          </Row>
        </Column>
        <Text className="font-normal xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[150px] lg:mt-[97px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 tracking-ls1 w-[auto]">
          Book a demo Today !
        </Text>
        <Row className="font-manrope items-center justify-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[31%]">
          <Input
            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="w-[48%]"
            type="text"
            name="GroupNinetyFour"
            placeholder="Your name"
            size="sm"
          ></Input>
          <Input
            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:ml-[24px] 3xl:ml-[28px] lg:ml-[18px] w-[47%] xl:ml-[21px]"
            type="number"
            name="Group100"
            placeholder="Your number"
            size="sm"
          ></Input>
        </Row>
        <Row className="font-manrope items-center justify-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[31%]">
          <Input
            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="w-[48%]"
            type="email"
            name="GroupNinetyEight"
            placeholder="Email ID"
          ></Input>
          <Input
            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
            wrapClassName="2xl:ml-[24px] 3xl:ml-[28px] lg:ml-[18px] w-[47%] xl:ml-[21px]"
            type="text"
            name="GroupNinetySix"
            placeholder="Institute name"
          ></Input>
        </Row>
        <Row className="bg-black_900 font-questrial items-center justify-center lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius985 w-[31%]">
          <Text className="font-normal mb-[1px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 tracking-ls1 w-[auto]">
            Enroll
          </Text>
          <Img
            src="images/img_arrowright_17X40.svg"
            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[215px] xl:ml-[246px] 2xl:ml-[277px] 3xl:ml-[332px] lg:mr-[14px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] w-[13%]"
            alt="arrowright One"
          />
        </Row>
        <footer className="bg-black_900 font-manrope lg:mt-[150px] xl:mt-[171px] 2xl:mt-[193px] 3xl:mt-[231px] w-[100%]">
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
    </>
  );
};

export default ProcampusPage;
