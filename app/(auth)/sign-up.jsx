import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { Link, router, Redirect } from 'expo-router';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields');
            return;
        }

        setIsSubmitting(true);
        try {
            const result = await createUser(form.email, form.password, form.username);
            setUser(result);
            setIsLogged(true);
            router.replace('/home');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsSubmitting(false); // Ensure the loading state is reset
        }
    };

    return (
        <SafeAreaView className="bg-orange-200 h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px]"
                    />
                    <Text className="text-2xl text-orange-900 text-semibold mt-10 font-psemibold">
                        Sign up to GourmetGaze
                    </Text>
                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />
                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-orange-900 font-pregular">
                            Have an account already?
                        </Text>
                        <Link href="/sign-in" className="text-lg font-psemibold" style={{ color: '#FFA001' }}>
                            Sign In
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
