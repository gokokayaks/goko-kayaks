import React, { useContext } from 'react';
import { Text } from '../../../components/text';
import { PricesContainer, TextContainer, ContentContainer, Alert } from './prices.styles';
import { FaAsterisk } from 'react-icons/fa';
import { PricesSectionContext } from '../context/prices';

export const PricesSection = () => {
  const [isSectionOpen, setIsSectionOpen] = useContext(PricesSectionContext);

  const toggleSectionOpen = () => {
    setIsSectionOpen(!isSectionOpen);
  };

  return (
    <PricesContainer id="prices">
      <TextContainer onClick={toggleSectionOpen}>
        <Text type="subHeading" color="white" alignment="center">
          View Our Prices
        </Text>
      </TextContainer>
      <ContentContainer isSectionOpen={isSectionOpen}>
        <Text type="subHeading" color="blueDark" alignment="center">
          Tour Prices
        </Text>
        <table>
          <tr>
            <th></th>
            <th>
              <Text type="paragraph" color="black">
                Length
              </Text>
            </th>
            <th>
              <Text type="paragraph" color="black">
                Price
              </Text>
            </th>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Eco Tour
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                2 Hours
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $55
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Sunset Tours
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                1.5 Hours
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $45
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                On The Water Meditation (OWM)™
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                45 Minutes
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $30
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Instruction
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                2 Hours (1 Hour Practice)
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $75
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Team Building, Parties & Educational Paddles
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                Customizable
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                POA
              </Text>
            </td>
          </tr>
        </table>

        <Alert theme="orange">
          <p>
            <FaAsterisk /> Special pricing for team building, parties and educational paddles
          </p>
          <p>Contact us for more information!</p>
          <Text type="link" href="mailto:gokokayaks@gmail.com">
            gokokayaks@gmail.com
          </Text>
        </Alert>

        <Text type="subHeading" color="blueDark" alignment="center">
          Rental Prices
        </Text>

        <table>
          <tr>
            <th></th>
            <th>
              <Text type="paragraph" color="black">
                2 Hours
              </Text>
            </th>
            <th>
              <Text type="paragraph" color="black">
                4 Hours
              </Text>
            </th>
            <th>
              <Text type="paragraph" color="black">
                8 Hours
              </Text>
            </th>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Single Kayak
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $40
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $50
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $65
              </Text>
            </td>
          </tr>
          <tr>
            <td>
              <Text type="paragraph" weight="bold" color="black">
                Tandem Kayak
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $50
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $65
              </Text>
            </td>
            <td>
              <Text type="paragraph" color="black">
                $80
              </Text>
            </td>
          </tr>
        </table>

        <Alert theme="purple">
          <p>
            <FaAsterisk /> In the event you need to cancel or adjust your booking, we require 12 hours notice via
            phonecall, voicemail, text or email. Where 12 hours notice is not given on a cancellation, you will be
            charged the full amount of the total payment. This includes on the day bookings and no shows.
          </p>
          <p>
            Goko Kayaks may need to reschedule a reservation due to weather concerns or safety issues. In this instance,
            if the proposed reschedule date does not suit you and requires you to cancel your booking, you will not be
            charged.
          </p>
          <p>
            Goko Kayaks reserves the right to charge additional fees for late return of rental gear, damage/loss of
            gear, or late arrival to launch time.
          </p>
        </Alert>
      </ContentContainer>
    </PricesContainer>
  );
};
