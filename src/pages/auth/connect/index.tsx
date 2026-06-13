import { useRouter } from 'next/navigation';
import { Button, Container, Stack, Text, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NextLink from 'next/link';
import { m } from "framer-motion";

import PageWrapper, { Layout } from 'src/components/wrappers/Page';
import { PATH_AUTH, PATH_DASHBOARD } from "src/routes/paths";

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout variant="logoOnly">{page}</Layout>;
};

export const animation = "fadeInUp 1s cubic-bezier(0.5, 1, 0.5, 1) 0.3s forwards";

export default function LoginPage() {

    const { t } = useTranslation();
    const router = useRouter();


    const handleLogin = async () => {
        try {
            router.push(PATH_DASHBOARD.app.home);    
        }
        catch (error: any) {
            console.log(error);
        }
    }

    return (
        <PageWrapper title="Access" >
            <Container w="full" maxW={"container.xl"} h="container.lg" p={10}>
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="3xl"
                    fontWeight="extrabold"
                    p="9"
                    align="center"
                    opacity="0"
                    as={m.div}
                    animation={animation}
                >
                    {t('access_page.message')}
                </Text>
                <Center>
                    <Stack direction={{ base: 'column', sm: 'row' }} spacing={5} alignItems="center">
                        <Button
                            variant="solid"
                            size="lg"
                            onClick={handleLogin}
                        >
                            {t('buttons.btn_access')}
                        </Button>
                        <NextLink href={PATH_AUTH.mint} passHref>
                            <Button
                                variant="solid"
                                size="lg"
                                colorScheme={"caw"}
                            >
                                {t('home.btn_mint')}
                            </Button>
                        </NextLink>
                    </Stack>
                </Center>
            </Container>
        </PageWrapper>
    );
}