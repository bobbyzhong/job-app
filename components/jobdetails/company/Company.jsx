import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    style={styles.logoImage}
                    resizeMode="contain"
                    source={{
                        uri: checkImageURL(companyLogo)
                            ? companyLogo
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/768px-Circle_Davys-Grey_Solid.svg.png",
                    }}
                />
            </View>

            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>

            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName}>{companyName} / </Text>
                <View style={styles.locationBox}>
                    <Image
                        source={icons.location}
                        resizeMode="contain"
                        style={styles.locationImage}
                    />
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
        </View>
    );
};

export default Company;
