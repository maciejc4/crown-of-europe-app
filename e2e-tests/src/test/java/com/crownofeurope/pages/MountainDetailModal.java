package com.crownofeurope.pages;

import com.codeborne.selenide.SelenideElement;
import io.qameta.allure.Step;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.$;

public class MountainDetailModal {

    private final SelenideElement modal = $("mat-dialog-container, .modal, .cdk-overlay-pane").as("Mountain Detail Modal");
    private final SelenideElement modalTitle = $("mat-dialog-container h2, .modal-title, [mat-dialog-title]").as("Modal Title");
    private final SelenideElement mountainImage = $("mat-dialog-container img, .modal img, .mountain-image").as("Mountain Image");
    private final SelenideElement osmMap = $("mat-dialog-container iframe, .map-container, .osm-map").as("OSM Map");
    private final SelenideElement description = $("mat-dialog-container .description, .mountain-description, [mat-dialog-content] p").as("Description");
    private final SelenideElement trailsSection = $("mat-dialog-container .trails, .trails-list").as("Trails Section");
    private final SelenideElement weatherSection = $("mat-dialog-container .weather, .weather-info").as("Weather Section");
    private final SelenideElement mapyCzLink = $("mat-dialog-container a[href*='mapy.cz'], .mapy-cz-link").as("Mapy.cz Link");
    private final SelenideElement closeButton = $("mat-dialog-container button[mat-dialog-close], .close-button, button:has(mat-icon:has-text('close'))").as("Close Button");

    @Step("Verify modal is visible")
    public MountainDetailModal verifyModalVisible() {
        modal.shouldBe(visible);
        return this;
    }

    @Step("Verify modal title contains: {expectedTitle}")
    public MountainDetailModal verifyTitle(String expectedTitle) {
        modalTitle.shouldHave(text(expectedTitle));
        return this;
    }

    @Step("Verify mountain image is visible")
    public MountainDetailModal verifyImageVisible() {
        mountainImage.shouldBe(visible);
        return this;
    }

    @Step("Verify OSM map is visible")
    public MountainDetailModal verifyMapVisible() {
        osmMap.shouldBe(visible);
        return this;
    }

    @Step("Verify description is visible")
    public MountainDetailModal verifyDescriptionVisible() {
        description.shouldBe(visible);
        description.shouldNotBe(empty);
        return this;
    }

    @Step("Verify trails section is visible")
    public MountainDetailModal verifyTrailsSectionVisible() {
        trailsSection.shouldBe(visible);
        return this;
    }

    @Step("Verify weather section is visible")
    public MountainDetailModal verifyWeatherVisible() {
        weatherSection.shouldBe(visible);
        return this;
    }

    @Step("Verify Mapy.cz link is present")
    public MountainDetailModal verifyMapyCzLink() {
        mapyCzLink.shouldBe(visible);
        mapyCzLink.shouldHave(attribute("href"));
        return this;
    }

    @Step("Close modal")
    public void closeModal() {
        closeButton.click();
        modal.shouldNotBe(visible);
    }

    @Step("Get modal title text")
    public String getModalTitle() {
        return modalTitle.getText();
    }
}
