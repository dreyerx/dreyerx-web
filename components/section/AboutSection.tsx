// AboutSection.tsx
import { Box, Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import React from "react";
import FeatureItem from "../FeatureItem";

const AboutSection = () => {
    return (
        <Flex
            w={'full'}
            flexDirection={'column'}
            bgColor={'bg'}
            align="center"
            height={'100vh'}
            px={'165px'}
            gap={'60px'}
            justifyContent={'center'}
            backgroundImage={'url("assets/images/dreyerx-hero-bg2.svg")'}
            backgroundPosition={'bottom -300px center'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
        >
            {/* <Box position={'absolute'}>

            </Box> */}
            <Box mx={425}>
                <Heading textAlign={'center'} as="h1" size="2xl" mb="4" color="primary">
                    What is DreyerX?
                </Heading>
                <Text fontSize="lg" mb={'20px'} textAlign={'center'}>
                    DreyerX is revolutionizing the networking world with secure, fast, and innovative solutions.
                </Text>
            </Box>
            <Flex gap={'20px'}>
                <FeatureItem
                    icon="speed.svg"
                    title="Enhanced Transaction Speed"
                    description="DreyerX leverages the Clique Proof of Authority (PoA) consensus mechanism to dramatically speed up transaction processing times, ensuring near-instantaneous confirmations for all transactions."
                />
                <FeatureItem
                    icon="scalabillity.svg"
                    title="Scalability"
                    description="DreyerX is designed with scalability in mind, capable of handling a high volume of transactions to support mass adoption and widespread use."
                />
                <FeatureItem
                    icon="energy.svg"
                    title="Sustainable and Energy-Efficient"
                    description="By using the Clique PoA consensus mechanism, DreyerX ensures a more energy-efficient and environmentally friendly blockchain solution compared to traditional proof-of-work systems."
                />
            </Flex>
        </Flex>
    );
};

export default AboutSection;
