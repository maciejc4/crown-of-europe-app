package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.$;

@Epic("Crown of Europe")
@Feature("PDF Generation")
@Tag("pdf")
public class PdfGenerationTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Generate PDF Report")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Generate PDF button should be visible")
    void generatePdfButtonShouldBeVisible() {
        mainPage.verifyPageLoaded();

        $("button").filter(text("PDF")).first().shouldBe(visible);
    }

    @Test
    @Story("Generate PDF Report")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should be able to click Generate PDF button")
    void shouldClickGeneratePdfButton() {
        mainPage.verifyPageLoaded();

        // Mark some mountains as climbed first
        mainPage.toggleMountainCheckbox(0);
        mainPage.toggleMountainCheckbox(1);

        // Click PDF button (we can't verify file download in Selenide easily,
        // but we can verify the button is clickable)
        mainPage.clickGeneratePdf();

        // Button should still be visible after click (no error)
        $("button").filter(text("PDF")).first().shouldBe(visible);
    }
}
