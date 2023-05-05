import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  Stack,
  Switch,
  Input,
} from "components";

const UVAcardpagePage = () => {
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
        <Row className="font-manrope 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] w-[78%]">
          <Button
            className="flex lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
            shape="icbRoundedBorder12"
            size="lgIcn"
            variant="icbOutlineBlack90019"
          >
            <Img
              src="images/img_group3724.png"
              className="flex items-center justify-center"
              alt="Group3724"
            />
          </Button>
          <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[47%]">
            <Text className="font-normal font-questrial not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[auto]">
              Prepaid Smart Card UVA!
            </Text>
            <Text className="font-manrope font-normal lg:leading-[11px] xl:leading-[13px] 2xl:leading-[15px] 3xl:leading-[18px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[57%]">
              You take your first step towards
              <br />
              <br />
              Financial Independence!
            </Text>
            <Text className="font-manrope font-normal lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900_6c tracking-ls1 w-[auto]">
              Your name
            </Text>
            <Text className="font-manrope font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
              Rishi Sharma
            </Text>
            <Line className="bg-black_900 h-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[63%]" />
            <Text className="font-manrope font-normal lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
              Your number
            </Text>
            <Line className="bg-black_900 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[63%]" />
            <Row className="bg-gray_900 font-questrial items-center justify-end lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[63%]">
              <Text className="font-normal my-[1px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                Get your UVA card now
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] w-[13%]"
                alt="arrowright"
              />
            </Row>
          </Column>
          <Stack className="lg:h-[392px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[604px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[43%]">
            <Stack className="absolute lg:h-[392px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[604px] right-[0] w-[77%]">
              <Img
                src="images/img_rectangle1375.svg"
                className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] right-[0] rounded-radius835 top-[26%] w-[86%]"
                alt="Rectangle1375"
              />
              <Stack
                className="absolute bg-cover bg-repeat lg:h-[392px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[604px] left-[0] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[66%]"
                style={{ backgroundImage: "url('images/img_group117.png')" }}
              >
                <Img
                  src="images/img_group30.png"
                  className="absolute lg:h-[374px] xl:h-[427px] 2xl:h-[481px] 3xl:h-[577px] inset-[0] justify-center m-[auto] w-[90%]"
                  alt="iPhone13Mocku"
                />
              </Stack>
            </Stack>
            <Column
              className="absolute bg-cover bg-repeat left-[0] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] top-[26%] w-[32%]"
              style={{ backgroundImage: "url('images/img_group44.svg')" }}
            >
              <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 w-[auto]">
                Recent
              </Text>
              <Row className="items-center justify-between ml-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[95%]">
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  E-learning
                </Text>
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  -100 INR
                </Text>
              </Row>
              <Line className="bg-gradient4  h-[0.4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]" />
              <Row className="items-center justify-between ml-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  Skill Course
                </Text>
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  -250 INR
                </Text>
              </Row>
              <Line className="bg-gradient4  h-[0.4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]" />
              <Row className="items-center justify-between ml-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  E-learning
                </Text>
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  -100 INR
                </Text>
              </Row>
              <Line className="bg-gradient4  h-[0.4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[94%]" />
              <Row className="items-center justify-between mb-[4px] ml-[auto] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[95%]">
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  E-learning
                </Text>
                <Text className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-lime_800 w-[auto]">
                  -100 INR
                </Text>
              </Row>
            </Column>
            <Row className="absolute bottom-[29%] items-center justify-between left-[0] w-[21%]">
              <Button
                className="flex lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-center lg:w-[35px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                shape="icbRoundedBorder22"
                size="mdIcn"
              >
                <Img
                  src="images/img_group3536.png"
                  className="flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                  alt="Group3536"
                />
              </Button>
              <Button
                className="flex lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] items-center justify-center lg:w-[35px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                shape="icbRoundedBorder22"
                size="smIcn"
              >
                <Img
                  src="images/img_group3537.png"
                  className="flex items-center justify-center"
                  alt="Group3537"
                />
              </Button>
            </Row>
            <Img
              src="images/img_singlecoinfa_419X419.png"
              className="absolute bottom-[0] lg:h-[138px] xl:h-[158px] 2xl:h-[178px] 3xl:h-[213px] right-[4%] lg:w-[137px] xl:w-[157px] 2xl:w-[177px] 3xl:w-[212px]"
              alt="SinglecoinFa"
            />
          </Stack>
        </Row>
        <Row className="bg-light_green_50 font-manrope items-center justify-end lg:mt-[108px] xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] lg:p-[103px] xl:p-[118px] 2xl:p-[133px] 3xl:p-[159px] w-[100%]">
          <Stack className="lg:h-[401px] xl:h-[459px] 2xl:h-[516px] 3xl:h-[619px] w-[38%]">
            <Stack
              className="absolute backdrop-opacity-[0.5] bg-cover bg-repeat blur-[7.22px] bottom-[0] lg:h-[303px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] 3xl:px-[112px] lg:px-[73px] xl:px-[83px] 2xl:px-[94px] right-[0] rotate-[25deg] w-[74%]"
              style={{ backgroundImage: "url('images/img_group3636.png')" }}
            >
              <Img
                src="images/img_financepeerlog_36X110.png"
                className="absolute lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] inset-y-[0] left-[0] my-[auto] w-[34%]"
                alt="FinancepeerLog One"
              />
            </Stack>
            <Column
              className="absolute bg-cover bg-repeat left-[0] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rotate-[15deg] rounded-radius115 shadow-bs8 top-[0] w-[65%]"
              style={{ backgroundImage: "url('images/img_group3639.png')" }}
            >
              <Row className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[28%]">
                <Column className="bg-teal_50 mt-[4px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius9 w-[56%]">
                  <div className="bg-green_A400 lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mb-[1px] mt-[4px] rounded-radius50 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"></div>
                </Column>
                <Text className="font-medium ml-[1px] 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-white_A700 w-[auto]">
                  Active
                </Text>
              </Row>
              <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-white_A700 w-[auto]">
                Falak Nagpal
              </Text>
              <Text className="font-medium lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 w-[auto]">
                Card number
              </Text>
              <Text className="font-medium lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 lg:tracking-ls2 2xl:tracking-ls3 xl:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                9900 9100 1677 0000
              </Text>
              <Text className="font-medium lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 w-[auto]">
                CVV
              </Text>
              <Row className="justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[69%]">
                <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 w-[auto]">
                  Valid till
                </Text>
                <Text className="font-medium 3xl:ml-[112px] lg:ml-[73px] xl:ml-[83px] 2xl:ml-[94px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 lg:tracking-ls2 2xl:tracking-ls3 xl:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                  122
                </Text>
              </Row>
              <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] mt-[1px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-white_A700 lg:tracking-ls2 2xl:tracking-ls3 xl:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                22/26
              </Text>
            </Column>
          </Stack>
          <Column className="lg:mb-[39px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] lg:ml-[106px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[49%]">
            <Text className="font-normal font-questrial lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[28%]">
              With your
              <br />
              UVA card
            </Text>
            <Text className="font-manrope font-normal lg:leading-[11px] xl:leading-[13px] 2xl:leading-[15px] 3xl:leading-[18px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[52%]">
              You take your first step towards
              <br />
              <br />
              Financial Independence!
            </Text>
            <Row className="3xl:mt-[111px] lg:mt-[72px] xl:mt-[82px] 2xl:mt-[93px] w-[88%]">
              <Img
                src="images/img_valid.png"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                alt="valid"
              />
              <Img
                src="images/img_reward.png"
                className="lg:h-[29px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] lg:ml-[147px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[6%]"
                alt="reward"
              />
              <Img
                src="images/img_savemoney.png"
                className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] mt-[4px] w-[7%]"
                alt="savemoney"
              />
            </Row>
            <Row className="font-manrope lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[98%]">
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[23%]">
                You get extended credit
              </Text>
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[33%]">
                You earn great rewards and discounts
              </Text>
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[17%]">
                You learn to save money
              </Text>
            </Row>
            <Row className="items-center ml-[1px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[87%]">
              <Stack className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[8%]">
                <Column
                  className="absolute bg-cover bg-repeat items-center lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] rounded-radius3 top-[0] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group42.svg')" }}
                >
                  <div className="bg-black_900 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] rounded-radius075 w-[100%]"></div>
                </Column>
                <Column className="absolute bottom-[0] lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] inset-x-[0] items-center mx-[auto] outline outline-[0.75px] outline-black_900 px-[4px] rounded-radius50 lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]">
                  <Img
                    src="images/img_star13.svg"
                    className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] outline outline-[0.75px] outline-black_900 rounded-radius02 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                    alt="StarThirteen"
                  />
                </Column>
              </Stack>
              <Img
                src="images/img_clock.svg"
                className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[153px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                alt="clock"
              />
              <Button
                className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center lg:ml-[156px] xl:ml-[178px] 2xl:ml-[201px] 3xl:ml-[241px] rounded-radius50 lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                size="smIcn"
                variant="icbOutlineBlack900"
              >
                <Img
                  src="images/img_favorite.svg"
                  className="flex items-center justify-center"
                  alt="favorite"
                />
              </Button>
            </Row>
            <Row className="font-manrope justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[24%]">
                You get a trendy numberless card
              </Text>
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[23%]">
                You make hassle free payments
              </Text>
              <Text className="font-semibold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[18%]">
                You learn to spend wisely
              </Text>
            </Row>
          </Column>
        </Row>
        <Text className="font-normal 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-black_901 tracking-ls1 w-[auto]">
          Use your UVA wallet to
        </Text>
        <Stack className="font-manrope lg:h-[445px] xl:h-[508px] 2xl:h-[572px] 3xl:h-[686px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[57%]">
          <Column className="absolute bg-gradient5  h-[max-content] inset-[0] items-center justify-center m-[auto] pl-[1px] py-[1px] rounded-radius34 w-[99%]">
            <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[84%]">
              <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 text-right tracking-ls1 w-[23%]">
                Track your balance
                <br />
                and transactions
              </Text>
              <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[26%]">
                Recieve notifications on best offers
              </Text>
            </Row>
            <Column className="items-center lg:mb-[35px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[100%]">
              <Line className="bg-gradient6  h-[2px] rounded-radius1 w-[100%]" />
              <Row className="justify-between lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[79%]">
                <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 text-right tracking-ls1 w-[24%]">
                  Block and unblock your card
                </Text>
                <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[23%]">
                  Add funds to your numberless card
                </Text>
              </Row>
              <Line className="bg-gradient6  h-[2px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius1 w-[100%]" />
              <Row className="justify-between lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[77%]">
                <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 text-right tracking-ls1 w-[24%]">
                  Add a new feature statement here
                </Text>
                <Text className="font-bold lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 tracking-ls1 w-[21%]">
                  Set-up <br />
                  spending limits
                </Text>
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat items-center left-[33%] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] right-[32%] shadow-bs9 w-[35%]"
            style={{ backgroundImage: "url('images/img_group117.png')" }}
          >
            <Column
              className="bg-cover bg-repeat items-center mb-[1px] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius3339 w-[98%]"
              style={{ backgroundImage: "url('images/img_group15.png')" }}
            >
              <Column
                className="bg-cover bg-repeat 3xl:my-[100px] lg:my-[65px] xl:my-[74px] 2xl:my-[84px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius1251 w-[99%]"
                style={{ backgroundImage: "url('images/img_group3639.png')" }}
              >
                <Row className="items-end lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[4px] w-[36%]">
                  <Switch value={false} className="w-[51%]" />
                  <Text className="font-medium mb-[2px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-white_A700 w-[auto]">
                    Active
                  </Text>
                </Row>
                <Text className="font-medium ml-[4px] 3xl:mt-[103px] lg:mt-[66px] xl:mt-[76px] 2xl:mt-[86px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] text-white_A700 w-[auto]">
                  Falak Nagpal
                </Text>
                <Text className="font-medium ml-[4px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 w-[auto]">
                  Card number
                </Text>
                <Text className="font-medium ml-[4px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 2xl:tracking-ls3 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                  9900 9100 1677 0000
                </Text>
                <Row className="items-center ml-[4px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[88%]">
                  <Text className="font-medium xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 w-[auto]">
                    Valid till
                  </Text>
                  <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 w-[auto]">
                    CVV
                  </Text>
                </Row>
                <Row className="items-center ml-[4px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[89%]">
                  <Text className="font-medium mt-[1px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 2xl:tracking-ls3 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                    22/26
                  </Text>
                  <Text className="font-medium mb-[1px] 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-white_A700 2xl:tracking-ls3 xl:tracking-ls3 lg:tracking-ls3 3xl:tracking-ls4 w-[auto]">
                    122
                  </Text>
                </Row>
              </Column>
            </Column>
          </Column>
          <Img
            src="images/img_group3703.png"
            className="absolute lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] left-[0] top-[8%] w-[6%]"
            alt="Group3703"
          />
          <Stack className="absolute bottom-[8%] font-gotham lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] right-[0] lg:w-[58px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]">
            <Img
              src="images/img_star1_75X75.svg"
              className="absolute bg-gradient1  lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] rounded-radius6 lg:w-[58px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
              alt="StarOne"
            />
            <Text className="absolute font-black h-[max-content] inset-[0] justify-center m-[auto] lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-shadow-ts text-white_A700 w-[max-content]">
              %
            </Text>
          </Stack>
        </Stack>
        <Column className="bg-light_green_50 items-center justify-end xl:mt-[112px] 2xl:mt-[127px] 3xl:mt-[152px] lg:mt-[98px] lg:p-[42px] xl:p-[48px] 2xl:p-[55px] 3xl:p-[66px] w-[100%]">
          <Text className="font-normal font-questrial lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] not-italic lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-black_901 text-center tracking-ls1 w-[29%]">
            Transform Identity to Utility
          </Text>
          <Text className="font-manrope font-normal leading-[120.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_901 text-center tracking-ls1 w-[51%]">
            Turn your student ID into a student utility card that unveils a
            range of benefits that can boost your educational journey.
          </Text>
          <Stack className="font-manrope lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[50%]">
            <Column className="absolute bottom-[10%] right-[0] w-[32%]">
              <Img
                src="images/img_vector699.svg"
                className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] ml-[4px] rounded-radius117 w-[7%]"
                alt="Vector699"
              />
              <Text className="font-medium leading-[normal] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] text-black_900 tracking-ls1 w-[65%]">
                Acts as a debit and credit card
              </Text>
              <Text className="font-medium leading-[normal] 3xl:mt-[117px] lg:mt-[76px] xl:mt-[87px] 2xl:mt-[98px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] text-black_900 tracking-ls1 w-[100%]">
                Tap feature to access library, classrooms, etc
              </Text>
            </Column>
            <Stack className="absolute lg:h-[338px] xl:h-[387px] 2xl:h-[435px] 3xl:h-[522px] left-[0] w-[88%]">
              <Stack className="absolute bottom-[0] lg:h-[336px] xl:h-[384px] 2xl:h-[432px] 3xl:h-[518px] w-[100%]">
                <Stack className="absolute bottom-[3%] lg:h-[326px] xl:h-[373px] 2xl:h-[420px] 3xl:h-[504px] w-[100%]">
                  <Stack className="absolute lg:h-[287px] xl:h-[329px] 2xl:h-[370px] 3xl:h-[444px] right-[0] top-[0] w-[93%]">
                    <Img
                      src="images/img_rectangle1375.svg"
                      className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] right-[0] rounded-radius9733 top-[11%] w-[95%]"
                      alt="Rectangle1377"
                    />
                    <Stack
                      className="absolute bg-cover bg-repeat lg:h-[287px] xl:h-[329px] 2xl:h-[370px] 3xl:h-[444px] left-[0] lg:px-[30px] xl:px-[34px] 2xl:px-[39px] 3xl:px-[46px] w-[44%]"
                      style={{
                        backgroundImage: "url('images/img_group3636.png')",
                      }}
                    >
                      <Img
                        src="images/img_financepeerlog_36X110.png"
                        className="absolute lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] left-[0] my-[auto] w-[51%]"
                        alt="FinancepeerLog Two"
                      />
                    </Stack>
                  </Stack>
                  <Button
                    className="absolute bottom-[0] flex 3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[84px] items-center justify-center left-[0] lg:w-[64px] xl:w-[73px] 2xl:w-[83px] 3xl:w-[99px]"
                    shape="icbRoundedBorder12"
                    size="xlIcn"
                    variant="icbOutlineBlack900191_2"
                  >
                    <Img
                      src="images/img_group3724.png"
                      className="flex items-center justify-center"
                      alt="GroupFortyOne"
                    />
                  </Button>
                  <Row className="absolute bg-white_A700 bottom-[20%] items-center left-[15%] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius699 shadow-bs10 w-[41%]">
                    <Img
                      src="images/img_image51.png"
                      className="lg:h-[46px] xl:h-[53px] 2xl:h-[60px] 3xl:h-[71px] my-[2px] rounded-radius50 lg:w-[45px] xl:w-[52px] 2xl:w-[59px] 3xl:w-[70px]"
                      alt="imageFiftyOne"
                    />
                    <Column className="lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[46%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_902 w-[auto]">
                        Falak Nagpal
                      </Text>
                      <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[87%]">
                        <Text className="font-medium 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_903 w-[auto]">
                          Class
                        </Text>
                        <Text className="font-medium lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] mt-[1px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_903 w-[auto]">
                          Year
                        </Text>
                      </Row>
                      <Row className="items-center justify-between mt-[4px] w-[100%]">
                        <Text className="font-medium 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_903 2xl:tracking-ls2 xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 w-[auto]">
                          4C
                        </Text>
                        <Text className="font-medium 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_903 2xl:tracking-ls2 xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 w-[auto]">
                          2022
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Stack>
                <Column
                  className="absolute bg-cover bg-repeat bottom-[0] items-end justify-end lg:p-[31px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] right-[21%] rounded-radius117 w-[33%]"
                  style={{ backgroundImage: "url('images/img_group43.svg')" }}
                >
                  <div className="bg-black_901 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                </Column>
              </Stack>
              <div className="absolute bg-black_901 bottom-[0] lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] left-[45%] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
              <div className="absolute bg-black_901 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] right-[20%] rounded-radius50 top-[42%] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
            </Stack>
          </Stack>
          <Text className="font-manrope font-medium leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[25px] text-black_900 tracking-ls1 w-[13%]">
            RFID enanable tracking for safety
          </Text>
        </Column>
        <Row className="xl:mt-[111px] 2xl:mt-[125px] 3xl:mt-[150px] lg:mt-[97px] w-[55%]">
          <Stack className="lg:h-[111px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[171px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[18%]">
            <Column className="absolute w-[100%]">
              <Img
                src="images/img_star12.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] rounded-radius1 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                alt="StarTwelve"
              />
              <Img
                src="images/img_star11.svg"
                className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] rounded-radius1 lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
                alt="StarEleven"
              />
            </Column>
            <Img
              src="images/img_group3665.png"
              className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] left-[12%] top-[11%] w-[71%]"
              alt="Group3665"
            />
          </Stack>
          <Stack className="lg:h-[111px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[171px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[143px] xl:ml-[164px] 2xl:ml-[185px] 3xl:ml-[222px] w-[21%]">
            <Img
              src="images/img_group3664.png"
              className="absolute bottom-[0] lg:h-[105px] xl:h-[120px] 2xl:h-[135px] 3xl:h-[161px] inset-x-[0] mx-[auto] w-[63%]"
              alt="Group3664"
            />
            <Img
              src="images/img_star7_39X39.svg"
              className="absolute bottom-[13%] lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] left-[0] rounded-radius1 lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
              alt="StarSeven"
            />
            <Img
              src="images/img_star8_39X39.svg"
              className="absolute lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] right-[0] rounded-radius1 top-[0] lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
              alt="StarEight"
            />
          </Stack>
          <Column className="items-end lg:ml-[171px] xl:ml-[195px] 2xl:ml-[220px] 3xl:ml-[264px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[11%]">
            <Stack className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[84%]">
              <Img
                src="images/img_vector711str.png"
                className="absolute bottom-[0] lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] left-[0] w-[83%]"
                alt="Vector711Str"
              />
              <Img
                src="images/img_star9.svg"
                className="absolute lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] right-[0] rounded-radius1 top-[0] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                alt="StarNine"
              />
            </Stack>
            <Column className="bg-gradient7  items-center lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_star10.svg"
                className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] rounded-radius1 lg:w-[30px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]"
                alt="StarTen"
              />
            </Column>
          </Column>
        </Row>
        <Row className="font-manrope items-center justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[54%]">
          <Text className="font-medium mt-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 tracking-ls1 w-[auto]">
            Safety
          </Text>
          <Text className="font-medium mb-[1px] lg:ml-[185px] xl:ml-[211px] 2xl:ml-[238px] 3xl:ml-[285px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 tracking-ls1 w-[auto]">
            Security
          </Text>
          <Text className="font-medium lg:ml-[185px] xl:ml-[211px] 2xl:ml-[238px] 3xl:ml-[285px] mt-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 tracking-ls1 w-[auto]">
            Privacy
          </Text>
        </Row>
        <Row className="items-center justify-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[53%]">
          <div className="backdrop-opacity-[0.5] bg-gray_500_73 blur-[20.00px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] rounded-radius38 w-[10%]"></div>
          <div className="backdrop-opacity-[0.5] bg-gray_500_73 blur-[20.00px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[204px] xl:ml-[233px] 2xl:ml-[263px] 3xl:ml-[315px] rounded-radius38 w-[10%]"></div>
          <div className="backdrop-opacity-[0.5] bg-gray_500_73 blur-[20.00px] lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[209px] xl:ml-[239px] 2xl:ml-[269px] 3xl:ml-[322px] rounded-radius38 w-[10%]"></div>
        </Row>
        <Stack className="font-manrope lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[543px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[100%]">
          <Row className="absolute bg-light_green_50 items-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] top-[0] w-[100%]">
            <Column className="w-[25%]">
              <Text className="font-normal font-questrial lg:leading-[39px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] not-italic lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-gray_900 tracking-ls1 w-[46%]">
                With your
                <br />
                UVA card
              </Text>
              <Text className="font-manrope font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[60%]">
                Partner with us to provide your students with a smart ID card{" "}
              </Text>
            </Column>
            <Column className="lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] w-[24%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                Institute name
              </Text>
              <Line className="bg-black_900 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
              <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900_6c tracking-ls1 w-[auto]">
                Your name
              </Text>
              <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 tracking-ls1 w-[auto]">
                Rishi Sharma
              </Text>
              <Line className="bg-black_900 h-[1px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]" />
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                wrapClassName="2xl:mt-[32px] 3xl:mt-[38px] lg:mt-[24px] w-[100%] xl:mt-[28px]"
                type="number"
                name="GroupEightyFive"
                placeholder="Your number"
                size="sm"
              ></Input>
              <Row className="bg-gray_900 font-questrial items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius985 w-[100%]">
                <Text className="font-normal mb-[4px] ml-[4px] mt-[1px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-lime_100 tracking-ls1 w-[auto]">
                  Get in touch
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[13%]"
                  alt="arrowright One"
                />
              </Row>
            </Column>
          </Row>
          <Img
            src="images/img_image30.png"
            className="absolute lg:h-[352px] xl:h-[403px] 2xl:h-[453px] 3xl:h-[543px] right-[0] w-[49%]"
            alt="imageThirty"
          />
        </Stack>
        <Row className="font-questrial items-end lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[48%]">
          <Text className="font-normal lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_901 tracking-ls1 w-[auto]">
            Available on
          </Text>
          <Img
            src="images/img_group3536.png"
            className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
            alt="imageTwentyEight"
          />
          <Img
            src="images/img_group3537.png"
            className="lg:h-[42px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[9%]"
            alt="imageTwentySix"
          />
          <Row className="bg-gray_900 items-center justify-between lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius985 w-[48%]">
            <Text className="font-normal ml-[3px] mt-[4px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-lime_100 tracking-ls1 w-[auto]">
              Apply now
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mr-[1px] w-[13%]"
              alt="arrowright Two"
            />
          </Row>
        </Row>
        <footer className="bg-black_900 font-manrope lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
          <Column className="3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[100%]">
            <Row className="xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[89px] w-[75%]">
              <Img
                src="images/img_financepeerlog_36X110.png"
                className="lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[13%]"
                alt="FinancepeerLog Three"
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

export default UVAcardpagePage;
