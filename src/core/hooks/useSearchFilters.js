"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

export function useSearchFilters(cities) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [dateRange, setDateReng] = useState(null);

  useEffect(() => {
    if (!cities || cities.length === 0) return;

    const originId = searchParams.get("originId");
    const destinationId = searchParams.get("destinationId");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (originId) {
      const found = cities.find(
        (item) => String(item.origin.id) === String(originId)
      );
      if (found) setOrigin(found.origin);
    } else {
      setOrigin(null);
    }
    console.log(cities);

    if (destinationId) {
      const foundDest = cities.find(
        (item) => String(item.destination.id) === String(destinationId)
      );
      if (foundDest) setDestination(foundDest.destination);
    } else {
      setDestination(null);
    }

    if (startDate || endDate) {
      setDateReng({
        from: startDate ? new Date(startDate) : null,
        to: endDate ? new Date(endDate) : null,
      });
    } else {
      setDateReng(null);
    }
  }, [searchParams, cities]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (origin?.id) params.set("originId", origin.id);
    if (destination?.id)
      params.set("destinationId", destination.id);

    if (dateRange?.from) {
      params.set(
        "startDate",
        new Date(dateRange.from).toISOString().split("T")[0]
      );
    }

    if (dateRange?.to) {
      params.set("endDate", new Date(dateRange.to).toISOString().split("T")[0]);
    }

    router.push(`/?${params.toString()}`);
    console.log(origin);
  };

  return {
    origin,
    setOrigin,
    destination,
    setDestination,
    dateRange,
    setDateReng,
    applyFilters,
  };
}

export default useSearchFilters;
