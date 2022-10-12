import React from 'react';
import { useState } from 'react';
import { HStack, VStack, Box, Text } from '@chakra-ui/react';
import { colors } from '../../../resources/colors';
import EditMainMenu from './EditMainMenu';
import General from './SubSettings/General';
import PersonalDetails from './SubSettings/PersonalDetails';
import ChangePassword from './SubSettings/ChangePassword';
import BankDetails from './SubSettings/BankDetail';
import LegalPolicies from './SubSettings/LegalPolicies';
import RolesPermission from './SubSettings/RolesPermission';
import WithdrawlAmount from './SubSettings/WithdrawlAmount';
import KYC from './SubSettings/KYC';


function Settings({showLabel}) {
  const [showGenral, setShowGenral] = useState(true);
  const [showPersonalDetail, setShowPersonalDetail] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showBankDetail, setShowBankDetail] = useState(false);
  const [showLegalPolicies, setShowLegalPolicies] = useState(false);
  const [showRolesPermission, setShowRolesPermission] = useState(false);
  const [showWithdrawlAmount, setShowWithdrawlAmount] = useState(false);
  const [showKyc, setShowKyc] = useState(false);

  const showEditMenu = label => {
    if (label === 'General') {
      setShowGenral(true);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Personal Detail') {
      setShowGenral(false);
      setShowPersonalDetail(true);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Change Password') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(true);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Bank Details') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(true);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Legal and Policies') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(true);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Roles and Permission') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(true);
      setShowWithdrawlAmount(false);
      setShowKyc(false);
    } 
    else if (label === 'Withdrawl Amount') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(true);
      setShowKyc(false);
    } 
    else if (label === 'KYC') {
      setShowGenral(false);
      setShowPersonalDetail(false);
      setShowChangePassword(false);
      setShowBankDetail(false);
      setShowLegalPolicies(false);
      setShowRolesPermission(false);
      setShowWithdrawlAmount(false);
      setShowKyc(true);
    }
  };

  return (
    <div>
      <Box>
        <VStack bg={colors.backgroundGray} alignItems="flex-start" ml={showLabel ? "0px" : "-200px"}>
          <Text fontSize="2xl" ml="323px" mt="20px" position="fixed">
            Edit Profile
          </Text>
        </VStack>
        <HStack>
          <HStack  ml="300px" mb="335px">
            <EditMainMenu showEditMenu={showEditMenu} showLabel={showLabel}/>
          </HStack>
          {showGenral && <General showLabel={showLabel}/>}
          {showPersonalDetail ? <PersonalDetails showLabel={showLabel}/> : null}
          {showChangePassword ? <ChangePassword showLabel={showLabel}/> : null}
          {showBankDetail ? <BankDetails showLabel={showLabel}/> : null}
          {showLegalPolicies ? <LegalPolicies showLabel={showLabel}/> : null}
          {showRolesPermission ? <RolesPermission showLabel={showLabel}/> : null}
          {showWithdrawlAmount ? <WithdrawlAmount showLabel={showLabel}/> : null}
          {showKyc ? <KYC showLabel={showLabel}/> : null}
        </HStack>
      </Box>
    </div>
  );
}

export default Settings;
