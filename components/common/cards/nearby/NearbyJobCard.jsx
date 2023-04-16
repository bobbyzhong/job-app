import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

import { checkImageURL } from "../../../../utils";

const NearbyJobCard = ({ job, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={{
                        uri: checkImageURL(job.employer_logo)
                            ? job.employer_logo
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Circle_Davys-Grey_Solid.svg/768px-Circle_Davys-Grey_Solid.svg.png",
                    }}
                    resizeMode="contain"
                    style={styles.logoImage}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {job.job_title}
                </Text>
                <Text style={styles.jobType}>{job.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default NearbyJobCard;
