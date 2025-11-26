package com.crownofeurope.tests;

import com.crownofeurope.pages.MainPage;
import io.qameta.allure.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.$;

@Epic("Crown of Europe")
@Feature("Import/Export")
@Tag("import-export")
public class ImportExportTest extends BaseTest {

    private final MainPage mainPage = new MainPage();

    @Test
    @Story("Export Progress")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Export button should be visible")
    void exportButtonShouldBeVisible() {
        mainPage.verifyPageLoaded();

        $("button").filter(text("Export").or(text("Download"))).first().shouldBe(visible);
    }

    @Test
    @Story("Export Progress")
    @Severity(SeverityLevel.NORMAL)
    @DisplayName("Should be able to click Export button")
    void shouldClickExportButton() {
        mainPage.verifyPageLoaded();

        // Mark some mountains as climbed
        mainPage.toggleMountainCheckbox(0);
        mainPage.toggleMountainCheckbox(1);

        // Click export
        mainPage.clickExport();

        // Should still be on page (no error)
        mainPage.verifyPageLoaded();
    }

    @Test
    @Story("Import Progress")
    @Severity(SeverityLevel.CRITICAL)
    @DisplayName("Import button/input should be visible")
    void importButtonShouldBeVisible() {
        mainPage.verifyPageLoaded();

        // Either a button or file input for import
        boolean hasImportButton = $("button").filter(text("Import").or(text("Load"))).first().exists();
        boolean hasFileInput = $("input[type='file']").exists();

        // At least one should exist
        org.assertj.core.api.Assertions.assertThat(hasImportButton || hasFileInput)
                .as("Import functionality should be available")
                .isTrue();
    }
}
